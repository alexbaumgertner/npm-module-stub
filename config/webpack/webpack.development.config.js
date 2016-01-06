/* eslint-disable no-var */
require('babel-core/register');

// Webpack config for development
const webpack = require('webpack');
const path = require('path');
const pkg = require( '../../package.json');
const WebpackNotifierPlugin = require( 'webpack-notifier');
const config = require( '../config');

module.exports = {
  // entry points
  entry: config.sourceDir,
  cache: true,
  debug: true,
  output: {
    path: config.distDir,
    filename: config.dev,
    libraryTarget: 'umd',
    library: config._app
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: path.join(__dirname, '../../src'),
      loader: 'babel-loader'
    }]
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new WebpackNotifierPlugin({
      alwaysNotify: true
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      '__DEV__': true,
      'process.env.NODE_ENV': JSON.stringify('development'),
      VERSION: JSON.stringify(pkg.version)
    })
  ],
  eslint: {
    configFile: config.eslintDir
  }
};
