# Want more linters in your life, but without having to set them up? Welcome

## This package is published from a monorepo

Check [https://github.com/DaniFoldi/lint-my-life](https://github.com/DaniFoldi/lint-my-life) for more details.

## Usage

For any of the presets below, you can install them with one command:

```bash
npm install @lint-my-life/preset
```

Add this to your `.eslintrc` for eslint (omit `eslint-plugin-`):

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

- `eslint-plugin-standard`
- `eslint-plugin-ts`
- `eslint-plugin-react`
- `eslint-plugin-react-ts`
- `eslint-plugin-react-native`
- `eslint-plugin-react-native-ts`
- `eslint-plugin-vue`
- `eslint-plugin-vue-ts`
- `eslint-plugin-nuxt`
- `eslint-plugin-jest`
- `eslint-plugin-vitest`
- `eslint-plugin-paintbrush`
- `eslint-plugin-comet`
- `stylelint-standard`
- `stylelint-scss`
- `stylelint-paintbrush`
- `stylelint-vue`
- `stylelint-vue-scss`

Addons:

- `eslint-plugin-semi`
- `eslint-plugin-unsorted`
- `eslint-plugin-unsorted-ts`
- `eslint-plugin-node`
- `eslint-plugin-node-cjs`

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
- `eslint-plugin-import`
- `eslint-plugin-unicorn`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-native`
- `eslint-import-resolver-typescript`
- `eslint-plugin-html`
- `eslint-plugin-vue`
- `eslint-plugin-nuxt`
- `eslint-plugin-jest`
- `eslint-plugin-vitest`
- `vue-eslint-parser`
- `@typescript-eslint/eslint-plugin`
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
