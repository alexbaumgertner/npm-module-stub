import webpack from 'webpack';
import path from 'path';
import WebpackNotifierPlugin from 'webpack-notifier';

import pkg from '../../package.json';
import config from '../config';
import commonConfig from './webpack.common.config.babel';

let productionConfig = Object.assign({}, commonConfig);

productionConfig.cache = false;
productionConfig.debug = false;
productionConfig.hot = false;

productionConfig.build = true;

productionConfig.output = {
  path: config.distDir,
  filename: config.minified,
  libraryTarget: 'umd',
  library: config._app
};

/*
CSS fonts
productionConfig.module.loaders = productionConfig.module.loaders.concat([
  {
    test: /.(ttf|eot|woff|woff2)$/,
    loader: 'file?name=fonts/[hash].[ext]'
  },
  {
    test: /.(png|jpg|svg|ico)$/,
    loader: 'file?name=img/[hash].[ext]'
  }
]);*/

productionConfig.plugins = productionConfig.plugins.concat([
  new webpack.optimize.DedupePlugin(),
  new webpack.DefinePlugin({
    '__DEV__': false,
    'process.env.NODE_ENV': JSON.stringify('production'),
    VERSION: JSON.stringify(pkg.version)
  }),
  new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false
    },
    compress: {
      'unused': true,
      'dead_code': true,
      warnings: false,
      screw_ie8: true // don't support ie < 9
    }
  })
]);

productionConfig.devtool = 'source-map';

export default productionConfig;
