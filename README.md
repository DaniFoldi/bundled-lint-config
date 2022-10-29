# Want more linters in your life, but without having to set them up? Welcome

## This package is published from a monorepo

Check [https://github.com/DaniFoldi/lint-my-life](https://github.com/DaniFoldi/lint-my-life) for more details.

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

## License

All packages, and this repository are licensed under the MIT license.
