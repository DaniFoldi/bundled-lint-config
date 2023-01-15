# Want more linters in your life, but without having to set them up? Welcome

_Note: I will shortly refactor the packages to follow a standard + addon structure._

## This package is published from a monorepo

Check [https://github.com/DaniFoldi/lint-my-life](https://github.com/DaniFoldi/lint-my-life) for more details.

## Usage

For any of the presets below, you can install them with one command:

```bash
npm install @lint-my-life/preset
```

Add this to your `.eslintrc` for eslint (omit `eslint-config-`):

```json
{
  "extends": [ "@lint-my-life/preset" ]
}
```

Add this to your `.stylelintrc` for stylelint:

```json
{
  "extends": [ "@lint-my-life/preset" ]
}
```

Presets:

- `eslint-config-standard`
- `eslint-config-ts`
- `eslint-config-react`
- `eslint-config-react-ts`
- `eslint-config-react-native`
- `eslint-config-react-native-ts`
- `eslint-config-vue`
- `eslint-config-vue-ts`
- `eslint-config-nuxt`
- `eslint-config-jest`
- `eslint-config-vitest`
- `eslint-config-paintbrush`
- `eslint-config-comet`
- `stylelint-standard`
- `stylelint-scss`
- `stylelint-paintbrush`
- `stylelint-vue`
- `stylelint-vue-scss`

Addons:

- `eslint-config-semi`
- `eslint-config-unsorted`
- `eslint-config-unsorted-ts`
- `eslint-config-node`
- `eslint-config-node-cjs`

Install and append these after the preset.

## Running with GitHub Actions

Add these steps to lint your repository:

```yaml
      - uses: dorny/paths-filter@v2
        id: changes
        with:
          filters: |
            eslint:
              - '**/*.js'
              - '**/*.jsx'
              - '**/*.ts'
              - '**/*.tsx'
              - '**/*.mjs'
              - '**/*.cjs'
              - '**/*.vue'
            yamllint:
              - '**/*.yml'
              - '**/*.yaml'
            stylelint:
              - '**/*.css'
              - '**/*.scss'
              - '**/*.vue'


      # Change as needed
      - if: steps.changes.outputs.eslint == 'true'
        run: |
          npm run lint:js
```

## Credits

Thanks to all authors that created the linter packages, and those that contributed to the presets and plugins this library is based on.

- `stylelint`
- `stylelint-config-recommended`
- `stylelint-config-standard`
- `stylelint-config-recommended-scss`
- `stylelint-config-standard-scss`
- `stylelint-config-idiomatic-order`
- `stylelint-high-performance-animation`
- `stylelint-order`
- `postcss`
- `postcss-html`
- `postcss-scss`
- `eslint`
- `eslint-config-import`
- `eslint-config-unicorn`
- `eslint-config-react`
- `eslint-config-react-hooks`
- `eslint-config-react-native`
- `eslint-import-resolver-typescript`
- `eslint-config-html`
- `eslint-config-vue`
- `eslint-config-nuxt`
- `eslint-config-jest`
- `eslint-config-vitest`
- `vue-eslint-parser`
- `@typescript-eslint/eslint-config`
- `@typescript-eslint/parser`
- `typescript`
- `yamllint`

## Adding a new package

- Add package to `packages/` folder.
- Add required copy rules to `prepublish.mjs`.
- Add package to `.github/workflows/main.yml`.

## Contributing

If you find false positives/false negatives, or combinations that don't work well, feel free to open an issue, or create a PR. 

This project uses commit messages starting with emoji:

|Emoji|Prefix|Description|
|-----|------|-----------|
|:zap:                   |`:zap:`                   |for implementing or extending functionality|
|:zap::zap:              |`:zap::zap:`              |for breaking changes                       |
|:hammer:                |`:hammer:`                |for bug fixes                              |
|:wrench:                |`:wrench:`                |for configurations                         |
|:vertical_traffic_light:|`:vertical_traffic_light:`|for tests                                  |
|:memo:                  |`:memo:`                  |for documentations                         |
|:mag:                   |`:mag:`                   |for lint fixes                             |
|:recycle:               |`:recycle:`               |for non-breaking refactoring               |
|:paperclip:             |`:paperclip:`             |for dependencies                           |
|:octocat:               |`:octocat:`               |for workflows                              |
|:construction:          |`:construction:`          |for experimental or temporary changes      |

## Note

Yes, some of the rules/presets are opinionated. No, I will not create addons for the one rule you want to change (eg. `"quotes'`). They are not better in any way.

## License

All packages, and this repository are licensed under the MIT license.
