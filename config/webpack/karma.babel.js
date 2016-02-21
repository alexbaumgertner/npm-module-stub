import webpack from 'webpack';
import path from 'path';

import config from '../config';
import commonConfig from './common.babel';

let karmaConfig = Object.assign({}, commonConfig);

export default karmaConfig;
