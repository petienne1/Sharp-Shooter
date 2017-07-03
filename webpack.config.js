const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'Src/Client');
const APP_DIR = path.resolve(__dirname, 'Src/Client/App');

const config = {
  entry: APP_DIR + "/Index.jsx",
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      }
    ]
  }
};

module.exports = config;
