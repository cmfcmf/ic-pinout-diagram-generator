const react = require('@neutrinojs/react');
const path = require('path');

module.exports = {
  options: {
    root: __dirname,
    mains: {
      "sdk": {
        entry: 'sdk',
      },
      "index": {
        entry: "demo/demo",
        template: 'src/demo/demo.html',
      }
    },
  },
  use: [
    react(),
    (neutrino) => {
      neutrino.config.optimization.merge({
        splitChunks: false,
        runtimeChunk: false,
      });
      neutrino.config.output
        .path(path.join(__dirname, 'dist'))
        .filename('[name].min.js');
    },
  ]
};