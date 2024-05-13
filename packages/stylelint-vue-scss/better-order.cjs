/* eslint-disable unicorn/prefer-spread */

function trbl(prefix) {
  const rules = []

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
    `${prefix}left`
  ]
}


function startEnd(prefix) {
  return [ `${prefix}-start`, `${prefix}-end` ]
}


function minMax(suffix) {
  return [ suffix, `min-${suffix}`, `max-${suffix}` ]
}

function border(infix) {
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
  [
    'position',
    'z-index'
  ]
].flat()
  .concat(startEnd('inset-block'))
  .concat(startEnd('inset-inline'))

const displayAndBoxModel = [
  ...[
    ...[
      [
        'display',
        'overflow',
        'overflow-x',
        'overflow-y'
      ]
    ].flat()
      .concat(minMax('width'))
      .concat(minMax('inline-size'))
      .concat(minMax('height'))
      .concat(minMax('block-size')),
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
    'order'
  ]
    .concat(trbl('padding'))
    .concat(startEnd('padding-block'))
    .concat(startEnd('padding-inline'))
    .concat([ border() ].flat()
      .concat(border('top'))
      .concat(border('right'))
      .concat(border('bottom'))
      .concat(border('left')))
    .concat(border('left'))
    .concat(border('block-start'))
    .concat(border('block-end'))
    .concat(border('inline-start'))
    .concat(border('inline-end')),
  'border-start-start-radius',
  'border-start-end-radius',
  'border-end-start-radius',
  'border-end-end-radius'
]
  .concat(trbl('margin'))
  .concat(startEnd('margin-block'))
  .concat(startEnd('margin-inline'))

module.exports = {
  plugins: 'stylelint-order',
  rules: {
    'order/properties-order': [
      [ ...[ cssModules ].flat(), ...reset ]
        .concat(positioning)
        .concat(displayAndBoxModel),
      { unspecified: 'bottomAlphabetical' }
    ]
  }
}
