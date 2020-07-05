# Integrated Circuit Pinout Diagram Generator

This is a simple web tool to generate pin mappings for integrated circuits.
It is live at [cmfcmf.github.io/ic-pinout-diagram-generator](https://cmfcmf.github.io/ic-pinout-diagram-generator).
It is inspired by the work done by @sleemanj on their [ArduinoOrientedChipPinoutCreator](https://github.com/sleemanj/ArduinoOrientedChipPinoutCreator), but is a bit more flexible.

Currently, only pin mappings for the [PFS173 mikrocontroller](http://www.padauk.com.tw/en/product/show.aspx?num=90&kind=42) are available.
You can add your own pin mappings by editing `src/chips.js`.

To preview your changes, clone this repository, install `yarn`, and run `yarn install` and `yarn start`.

## LICENSE

MIT