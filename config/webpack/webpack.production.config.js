require('babel-core/register');

// Webpack config for creating the production bundle.

const webpack = require('webpack');
const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');
const PKG_LOCATION = path.join(__dirname, '../../package.json');
const config = require('../config');
const webpackConfig = require('./webpack.development.config');

module.exports = Object.assign({}, webpackConfig, {

  cache: false,
  debug: false,
  devtool: false,
  hot: false,
  build: true,
  output: {
    path: config.distDir,
    filename: config._app + '.min.js',
    libraryTarget: 'umd',
    library: config._app
  },
  plugins: [
    // Notifier
    new WebpackNotifierPlugin({
      title: config._app,
      alwaysNotify: true
    }),
    // optimizations
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        'unused': true,
        'dead_code': true,
        warnings: false,
        screw_ie8: true
      }
    }),
    new webpack.DefinePlugin({
      '__DEV__': false,
      'process.env.NODE_ENV': JSON.stringify('production'),
      VERSION: JSON.stringify(PKG_LOCATION.version)
    })
  ]
});
