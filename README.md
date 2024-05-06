# An eslint config
that you might not like, but that's not the point.

Check [https://github.com/DaniFoldi/lint-my-life](https://github.com/DaniFoldi/lint-my-life) for more details.

## Usage (eslint)

The eslint preset now comes with all plugins pre-configured.
Currently, it requires eslint 8.x.x.

```bash
npm install -D bundled-eslint-config eslint
```

Add this to your `eslint.config.js`:

```js
export { default } from 'bundled-eslint-config'
```

Any ruleset can be extended, and new rulesets can be added, however those are not considered to be a part of the stable API, so they are not documented. Look at index.ts for details.

## Usage (stylelint)

_TODO_


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

The point of such a preset is to have _some_ default that all contributors can agree on, so they can move on to more important things.

## License

All packages in this repository are licensed under the MIT license.
