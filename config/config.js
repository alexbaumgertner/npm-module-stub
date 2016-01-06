import pkg from '../package.json';

const _root = __dirname + '../../';

module.exports = {

    // path helpers
    _app: pkg.name,
    minified: pkg.name + '.min.js',
    dev: pkg.name + '.js',
    eslintDir: _root + '.eslintrc',
    distDir: _root + 'lib',
    sourceDir: _root + 'src',
    testDir: _root + 'tests',
    setupDir: _root + 'tests/setup/node.js',
    karmaConf: _root + 'config/karma.conf.js'
};
