import vitest from 'eslint-plugin-vitest'
import { mainRuleset as vitestMain } from './vitest.js'
import typescriptEslintParser from '@typescript-eslint/parser'
import astroEslintParser from 'astro-eslint-parser'
import globals from 'globals'


export function mainRuleset(rules = {}, plugins = {}) {
  return {
    ...vitestMain(
      {
        // *--- POSSIBLE ERRORS ---*
        'astro/no-conflict-set-directives': 'error',
        'astro/no-deprecated-astro-canonicalurl': 'warn',
        'astro/no-deprecated-astro-fetchcontent': 'warn',
        'astro/no-deprecated-astro-resolve': 'warn',
        'astro/no-deprecated-getentrybyslug': 'error',
        'astro/no-unused-define-vars-in-style': 'error',
        'astro/valid-compile': 'error',

        // *--- SECURITY VULNERABILITY ---*
        'astro/no-set-html-directive': 'error',

        // *--- BEST PRACTICES ---*
        'astro/no-set-text-directive': 'warn',
        'astro/no-unused-css-selector': 'warn',

        // *--- STYLISTIC ISSUES ---*
        'astro/prefer-class-list-directive': 'warn',
        'astro/prefer-object-class-list': 'warn',
        'astro/prefer-split-class-list': 'warn',

        // *--- A11Y EXTENSION RULES ---*
        'astro/jsx-a11y/alt-text': 'warn',
        'astro/jsx-a11y/anchor-ambiguous-text': 'warn',
        'astro/jsx-a11y/anchor-has-content': 'warn',
        'astro/jsx-a11y/anchor-is-valid': 'warn',
        'astro/jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
        'astro/jsx-a11y/aria-props': 'warn',
        'astro/jsx-a11y/aria-proptypes': 'warn',
        'astro/jsx-a11y/aria-role': 'warn',
        'astro/jsx-a11y/aria-unsupported-elements': 'warn',
        'astro/jsx-a11y/autocomplete-valid': 'warn',
        'astro/jsx-a11y/click-events-have-key-events': 'warn',
        'astro/jsx-a11y/control-has-associated-label': 'warn',
        'astro/jsx-a11y/heading-has-content': 'warn',
        'astro/jsx-a11y/html-has-lang': 'warn',
        'astro/jsx-a11y/iframe-has-title': 'warn',
        'astro/jsx-a11y/img-redundant-alt': 'warn',
        'astro/jsx-a11y/interactive-supports-focus': 'warn',
        'astro/jsx-a11y/label-has-associated-control': 'warn',
        'astro/jsx-a11y/lang': 'warn',
        'astro/jsx-a11y/media-has-caption': 'warn',
        'astro/jsx-a11y/mouse-events-have-key-events': 'warn',
        'astro/jsx-a11y/no-access-key': 'warn',
        'astro/jsx-a11y/no-aria-hidden-on-focusable': 'warn',
        'astro/jsx-a11y/no-autofocus': 'warn',
        'astro/jsx-a11y/no-distracting-elements': 'warn',
        'astro/jsx-a11y/no-interactive-element-to-noninteractive-role': 'warn',
        'astro/jsx-a11y/no-noninteractive-element-interactions': 'warn',
        'astro/jsx-a11y/no-noninteractive-element-to-interactive-role': 'warn',
        'astro/jsx-a11y/no-noninteractive-tabindex': 'warn',
        'astro/jsx-a11y/no-redundant-roles': 'warn',
        'astro/jsx-a11y/no-static-element-interactions': 'warn',
        'astro/jsx-a11y/prefer-tag-over-role': 'warn',
        'astro/jsx-a11y/role-has-required-aria-props': 'warn',
        'astro/jsx-a11y/role-supports-aria-props': 'warn',
        'astro/jsx-a11y/scope': 'warn',
        'astro/jsx-a11y/tabindex-no-positive': 'warn',

        // *--- EXTENSION RULES ---*
        'astro/semi': [ 'warn', 'never' ],
        ...rules
      },
      { vitest, ...plugins }
    ),
    languageOptions: {
      globals: {
        ...globals.es2021,
        Astro: false,
        Fragment: false
      },
      parser: astroEslintParser,
      parserOptions: {
        parser: typescriptEslintParser,
        extraFileExtensions: [ '.astro' ]
      }
    }
  }
}

export default [ mainRuleset() ]
