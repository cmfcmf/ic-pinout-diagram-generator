# Integrated Circuit Pinout Diagram Generator

This is a simple web tool to generate pin mappings for integrated circuits.
It is live at [cmfcmf.github.io/ic-pinout-diagram-generator](https://cmfcmf.github.io/ic-pinout-diagram-generator).
It is inspired by the work done by @sleemanj on their [ArduinoOrientedChipPinoutCreator](https://github.com/sleemanj/ArduinoOrientedChipPinoutCreator), but is a bit more flexible.

Currently, pin mappings for many [Padauk mikrocontrollers](http://www.padauk.com.tw) are available.
You can add your own pin mappings by editing `src/chips.js`.

To preview your changes, clone this repository, install `yarn`, and run `yarn install` and `yarn start`.

## SDK

You can embed these pinout diagrams on your own page. To do that, simply place the following code snippet into your HTML:

```html
<div id="pinout-diagram"></div>
<script src="https://unpkg.com/@cmfcmf/pinout-diagrams/dist/sdk.min.js"></script>
<script>
  PinOutDiagrams.render(document.getElementById('pinout-diagram'), {
    // Don't specify if you want to disply all ICs
    ics: [
      "name-of-the-first-ic-you-want-to-embed",
      "name-of-the-second-ic-you-want-to-embed"
    ],
    // maxWidth of the legend. Don't specify to use 100%
    maxWidth: '980px'
  });
</script>
```

## LICENSE

MIT
