import webpackConfig from './webpack/webpack.karma.config';

// Karma configuration here
module.exports = function (config) {
    config.set({
        // list of files to exclude
        exclude: [],

        // list of files / patterns to load in the browser
        files: [
            './node_modules/phantomjs-polyfill/bind-polyfill.js',
            './test/browser/**/*.spec.js',
            './test/browser/**/*.html',
            './test/common/**/*.spec.js',
            './test/common/**/*.html'
        ],

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: [
            'sinon-chai',
            'sinon',
            'chai',
            'mocha'
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            './test/browser/**/*.spec.js': ['webpack', 'sourcemap'],
            './test/common/**/*.spec.js': ['webpack', 'sourcemap'],
            './test/browser/**/*.html': ['html2js'],
            './test/common/**/*.html': ['html2js']
        },

        // test results reporter to use
        reporters: ['progress', 'coverage', 'spec'],

        specReporter: {
            maxLogLines: 5,
            suppressErrorSummary: true,
            suppressFailed: false,
            suppressPassed: false,
            suppressSkipped: true
        },

        reportSlowerThan: 500,

        coverageReporter: {

            dir: 'coverage',

            reporters: [
                { type: 'text' },
                {
                    type: 'lcovonly',
                    subdir: '.',
                    file: 'report-lcovonly.txt'
                }
            ]
        },

        webpack: {
            module: webpackConfig.module
        },

        webpackMiddleware: {
            noInfo: true
        },

        plugins: [
            'karma-sinon-chai',
            'karma-sinon',
            'karma-chai',
            'karma-webpack',
            'karma-mocha',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-ie-launcher',
            'karma-coverage',
            'karma-sourcemap-loader',
            'karma-spec-reporter',
            'karma-html2js-preprocessor'
        ],

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ['PhantomJS'],

        browserDisconnectTimeout: 10000,

        browserDisconnectTolerance: 2,

        // concurrency level how many browser should be started simultaneously
        concurrency: 4,

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 100000,

        browserNoActivityTimeout: 30000,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values:
        // config.LOG_DISABLE
        // config.LOG_ERROR
        // config.LOG_WARN
        // config.LOG_INFO
        // config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });

    // Travis conf part
    if (process.env.TRAVIS) {

        config.logLevel = config.LOG_DEBUG;

        // Karma (with socket.io 1.x) buffers by 50 and 50 tests can take a long time on IEs;-)
        config.browserNoActivityTimeout = 120000;

        // Debug logging into a file, that we print out at the end of the build.
        config.loggers.push({
            type: 'file',
            filename: 'logs/karma.log'
        });
    }
};
