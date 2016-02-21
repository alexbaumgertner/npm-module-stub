import webpack from 'webpack';
import path from 'path';
import WebpackNotifierPlugin from 'webpack-notifier';

import pkg from '../../package.json';
import config from '../config';
import commonConfig from './common.babel';


process.env.NODE_ENV = 'development';

let developmentConfig = Object.assign({}, commonConfig);
/*
CSS font
developmentConfig.module.loaders = developmentConfig.module.loaders.concat([
  {
    test: /.(ttf|eot|woff|woff2)$/,
    loader: 'file?name=fonts/[name]_[hash].[ext]'
  },
  {
    test: /.(png|jpg|svg|ico)$/,
    loader: 'file?name=img/[name]_[hash].[ext]'
  }
]);*/

developmentConfig.plugins = developmentConfig.plugins.concat([
  new webpack.DefinePlugin({
    '__DEV__': true,
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    VERSION: JSON.stringify(pkg.version)
  })
]);

developmentConfig.devtool = 'cheap-inline-module-source-map';

export default developmentConfig;
