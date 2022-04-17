# This package is published from a monorepo.

Check https://github.com/DaniFoldi/linters for more details.

## Setup

### Standard

`npm i -D stylelint stylelint-config-recommended stylelint-order stylelint-high-performance-animation`

stylelint.config.(c)js:

```js
module.exports = {
  extends: [ '@danifoldi/stylelint-presets/standard' ]
}
```

### Vue

`npm i -D stylelint stylelint-config-recommended stylelint-order stylelint-high-performance-animation postcss postcss-html`

stylelint.config.(c)js:

```js
module.exports = {
  extends: [ '@danifoldi/stylelint-presets/vue' ]
}
```

### Scss

`npm i -D stylelint stylelint-config-recommended stylelint-order stylelint-high-performance-animation postcss postcss-scss sass stylelint-config-recommended-scss stylelint-scss`

stylelint.config.(c)js:

```js
module.exports = {
  extends: [ '@danifoldi/stylelint-presets/scss' ]
}
```

### Vue-scss

`npm i -D stylelint stylelint-config-recommended stylelint-order stylelint-high-performance-animation postcss postcss-html postcss-scss sass stylelint-config-recommended-scss stylelint-scss`

stylelint.config.(c)js:

```js
module.exports = {
  extends: [ '@danifoldi/stylelint-presets/vue-scss' ]
}
```

### Paintbrush

`npm i -D stylelint stylelint-config-recommended stylelint-order stylelint-high-performance-animation postcss postcss-html postcss-scss sass stylelint-config-recommended-scss stylelint-scss`

stylelint.config.(c)js:

```js
module.exports = {
  extends: [ '@danifoldi/stylelint-presets/paintbrush' ]
}
```
