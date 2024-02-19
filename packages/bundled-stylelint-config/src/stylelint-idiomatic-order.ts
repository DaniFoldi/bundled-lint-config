// Adapted from https://github.com/ream88/stylelint-config-idiomatic-order/blob/2b456525ef46ed343959a664adbff608899f70de/index.js#L1
// Licensed under MIT

function trbl(prefix?: string): string[] {
  const rules: string[] = []

  if (prefix) {
    rules.push(prefix)
    prefix = `${prefix}-`
  } else {
    prefix = ''
  }

  return [
    ...rules,
    `${prefix}top`,
    `${prefix}right`,
    `${prefix}bottom`,
    `${prefix}left`,
    ...prefix ? [
      `${prefix}block`,
      `${prefix}block-start`,
      `${prefix}block-end`,
      `${prefix}inline`,
      `${prefix}inline-start`,
      `${prefix}inline-end`
    ] : []
  ]
}

function minMax(suffix: string) {
  return [ suffix, `min-${suffix}`, `max-${suffix}` ]
}

function border(infix?: string) {
  infix = infix ? `-${infix}` : ''

  return [
    `border${infix}`,
    `border${infix}-width`,
    `border${infix}-style`,
    `border${infix}-color`,
    `border${infix}-radius`
  ]
}

const cssModules = [[ 'composes' ]].flat()

const reset = [ 'all' ]

const positioning = [
  'position',
  'z-index',
  ...trbl()
]

const displayAndBoxModel = [
  'display',
  'overflow',
  ...minMax('width'),
  ...minMax('height'),
  'box-sizing',
  'flex',
  'flex-basis',
  'flex-direction',
  'flex-flow',
  'flex-grow',
  'flex-shrink',
  'flex-wrap',
  'align-content',
  'align-items',
  'align-self',
  'justify-content',
  'order',
  ...trbl('padding'),
  ...border(),
  ...border('top'),
  ...border('right'),
  ...border('bottom'),
  ...border('left'),
  ...trbl('margin')
]

export const order = [ ...[ cssModules ].flat(), ...reset, ...positioning, ...displayAndBoxModel ]
