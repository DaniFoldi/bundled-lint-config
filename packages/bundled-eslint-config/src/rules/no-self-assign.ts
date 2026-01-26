import type { Rule, SourceCode, Scope } from 'eslint'


type IdentifierNode = Extract<Rule.Node, { type: 'Identifier' }>
type NodeWithParent = Rule.Node & { parent?: Rule.Node }

function isIdentifier(node: Rule.Node): node is IdentifierNode {
  return node.type === 'Identifier'
}

function traverseNodes(
  node: Rule.Node,
  sourceCode: SourceCode,
  visitor: (child: Rule.Node) => void,
  shouldSkipChildren?: (child: Rule.Node) => boolean
): void {
  visitor(node)

  if (shouldSkipChildren?.(node)) return

  const keys = sourceCode.visitorKeys[node.type] ?? []

  for (const key of keys) {
    const value = (node as unknown as Record<string, unknown>)[key]

    if (Array.isArray(value)) {
      for (const child of value) {
        if (child && typeof child === 'object' && 'type' in child) {
          traverseNodes(child as Rule.Node, sourceCode, visitor, shouldSkipChildren)
        }
      }
    } else if (value && typeof value === 'object' && 'type' in value) {
      traverseNodes(value as Rule.Node, sourceCode, visitor, shouldSkipChildren)
    }
  }
}

function isFunctionLike(node: Rule.Node): boolean {
  return node.type === 'FunctionExpression'
    || node.type === 'FunctionDeclaration'
    || node.type === 'ArrowFunctionExpression'
}

function isReferenceIdentifier(identifier: IdentifierNode): boolean {
  const parent = (identifier as NodeWithParent).parent
  if (!parent) return true
  if ('type' in parent && typeof parent.type === 'string' && parent.type.startsWith('TS')) return false

  if (parent.type === 'Property' && parent.key === identifier) return parent.computed || parent.shorthand

  if (
    (parent.type === 'MemberExpression'
      || parent.type === 'OptionalMemberExpression')
    && parent.property === identifier
  ) {
    return parent.computed
  }

  if (
    (parent.type === 'MethodDefinition' || parent.type === 'PropertyDefinition')
    && parent.key === identifier
    && !parent.computed
  ) return false

  if (
    parent.type === 'ImportSpecifier'
    || parent.type === 'ImportDefaultSpecifier'
    || parent.type === 'ImportNamespaceSpecifier'
  ) {
    return false
  }

  if (
    parent.type === 'ExportSpecifier'
    && parent.exported === identifier
    && !parent.computed
  ) {
    return false
  }

  if (parent.type === 'LabeledStatement' && parent.label === identifier) return false

  return true
}

function findVariable(node: Rule.Node, name: string, sourceCode: SourceCode): Scope.Variable | null {
  let scope: Scope.Scope | null = sourceCode.getScope(node)

  while (scope) {
    const variable = scope.set.get(name)
    if (variable) return variable
    scope = scope.upper
  }

  return null
}

function isSelfReference(identifier: IdentifierNode, variable: Scope.Variable, sourceCode: SourceCode): boolean {
  if (variable.references.some(ref => ref.identifier === identifier)) return true

  let scope: Scope.Scope | null = sourceCode.getScope(identifier)

  while (scope) {
    const reference = scope.references.find(ref => ref.identifier === identifier)
    if (reference) return reference.resolved === variable
    scope = scope.upper
  }

  scope = sourceCode.getScope(identifier)

  while (scope) {
    const candidate = scope.set.get(identifier.name)
    if (candidate) {
      if (candidate === variable) return true
      return false
    }
    scope = scope.upper
  }

  let current: Rule.Node | undefined = (identifier as NodeWithParent).parent

  while (current) {
    if (
      current.type === 'AssignmentPattern'
      && current.left.type === 'Identifier'
      && current.left.name === variable.name
      && variable.defs.some(def => def.name === current.left)
    ) {
      return true
    }

    current = (current as NodeWithParent).parent
  }

  return false
}

function isUnresolvedSelfReference(identifier: IdentifierNode, name: string, sourceCode: SourceCode): boolean {
  if (identifier.name !== name) return false
  if (findVariable(identifier, name, sourceCode)) return false
  return true
}

const rule: Rule.RuleModule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow self-references inside variable initializers and parameter default values'
    },
    schema: [],
    messages: {
      selfRef: 'Variable {{name}} is referenced within its own initializer.'
    }
  },

  create(context) {
    const sourceCode = (context as Rule.RuleContext & { sourceCode: SourceCode }).sourceCode

    function reportSelfReferences(node: Rule.Node, variable: Scope.Variable): void {
      traverseNodes(node, sourceCode, child => {
        if (!isIdentifier(child)) return
        if (!isReferenceIdentifier(child)) return

        if (isSelfReference(child, variable, sourceCode)) {
          context.report({
            node: child,
            messageId: 'selfRef',
            data: { name: variable.name }
          })
        }
      }, child => isFunctionLike(child))
    }

    function reportSelfReferencesByName(node: Rule.Node, name: string): void {
      traverseNodes(node, sourceCode, child => {
        if (!isIdentifier(child)) return
        if (!isReferenceIdentifier(child)) return

        if (isUnresolvedSelfReference(child, name, sourceCode)) {
          context.report({
            node: child,
            messageId: 'selfRef',
            data: { name }
          })
        }
      }, child => isFunctionLike(child))
    }

    return {
      VariableDeclarator(node) {
        if (!node.init || node.id.type !== 'Identifier') return

        const variable = findVariable(node, node.id.name, sourceCode)
        if (!variable) return

        reportSelfReferences(node.init as Rule.Node, variable)
      },

      FunctionDeclaration(node) {
        for (const param of node.params) {
          if (param.type !== 'AssignmentPattern' || param.left.type !== 'Identifier') continue

          const variable = findVariable(param.left, param.left.name, sourceCode)
          if (!variable) continue

          reportSelfReferences(param.right as Rule.Node, variable)
        }
      },

      FunctionExpression(node) {
        for (const param of node.params) {
          if (param.type !== 'AssignmentPattern' || param.left.type !== 'Identifier') continue

          const variable = findVariable(param.left, param.left.name, sourceCode)
          if (!variable) continue

          reportSelfReferences(param.right as Rule.Node, variable)
        }
      },

      ArrowFunctionExpression(node) {
        for (const param of node.params) {
          if (param.type !== 'AssignmentPattern' || param.left.type !== 'Identifier') continue

          const variable = findVariable(param.left, param.left.name, sourceCode)
          if (!variable) continue

          reportSelfReferences(param.right as Rule.Node, variable)
        }
      },

      PropertyDefinition(node) {
        if (!node.value) return
        if (node.key.type !== 'Identifier') return

        reportSelfReferencesByName(node.value as Rule.Node, node.key.name)
      }
    }
  }
}

export { rule }
