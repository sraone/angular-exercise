module.exports = function(config) {
    config.set({

        basePath: '../',

        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'src/**/app.js',
            'src/**/app.*.js',
            'src/**/*.module.js',
            'src/**/*.js',
            'test/specs/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['PhantomJS'],

        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-coverage'
        ],


        reporters: ['progress', 'coverage'],

        preprocessors: {
            'src/**/!(*bootstrap).js': ['coverage']
        },

        // optionally, configure the reporter 
        coverageReporter: {
            type: 'html',
            dir: 'coverage',
            subdir: '.'
        },

        singleRun: false,

        colors: true,

        logLevel: config.LOG_INFO

    });
};
