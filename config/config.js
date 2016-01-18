/* eslint-disable no-var */
require('babel-core/register'); // for ES2015 syntax

import path from 'path';
import pkg from '../package.json';

const _root = path.resolve(__dirname, '../');

const config = {
  _app: pkg.name,
  minified: pkg.name + '.min.js',
  dev: pkg.name + '.js',
  eslintDir: path.resolve(_root, '.eslintrc'),
  distDir: path.resolve(_root, 'lib'),
  sourceDir: path.resolve(_root, 'src'),
  testDir: path.resolve(_root, 'tests'),
  karmaConf: path.resolve(_root, 'config/karma.conf.js')
};

export default config;
