const path = require('path');
const webpack = require("webpack");

module.exports = {
  entry: {
    index: __dirname + '/src/index.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: 'Recorder.min.js',
    library: 'Recorder',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  mode: 'development'
}