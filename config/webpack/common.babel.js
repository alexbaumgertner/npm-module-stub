import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import WebpackNotifierPlugin from 'webpack-notifier';

import config from '../config';

const commonConfig = {
  entry: path.resolve(config.sourceDir, 'index.js'),
  cache: true,
  debug: true,
  progress: true,
  profile: true,
  colors: true,
  output: {
    path: config.distDir,
    filename: config.dev,
    libraryTarget: 'umd',
    library: config._app
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015-loose']
          /* REACT:  presets: ['es2015-loose' , 'react'] */
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css')
      }
    ]
  },
  resolve: {
    extensions: ['', '.css', '.js']
    /* REACT:  extensions: ['', '.js', '.jsx'] */
  },
  plugins: [
    // Break build on first error
    new webpack.NoErrorsPlugin(),

    // Build CSS
    new ExtractTextPlugin(config.devCss, {allChunks: true}),

    // Enable notification panel notice
    new WebpackNotifierPlugin({title: config._app, alwaysNotify: true}),

    // TODO: add description
    new webpack.optimize.OccurenceOrderPlugin()
  ]
};

export default commonConfig;
