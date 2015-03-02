// Karma configuration
// Generated on Sat Jul 05 2014 07:57:17 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    //basePath: '../../../main/webapp/',
    basePath: '../',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-ng-html2js-preprocessor'
            ],

     preprocessors: {
	  '**/*.html': 'ng-html2js'
    },

    ngHtml2JsPreprocessor: {
    	// If your build process changes the path to your templates,
        // use stripPrefix and prependPrefix to adjust it.
      stripPrefix: 'webapp/',
      //prependPrefix: 'templates/',

      // or define a custom transform function
//      cacheIdFromPath: function(filepath) {
//        return cacheId;
//      },

      // setting this option will create only a single module that contains templates
      // from all the files, so you can load them all with module('foo')
      //moduleName: 'directiveTemplateFilesModule'
    },

   // list of files / patterns to load in the browser
    files: [
      'bower_components/jquery/jquery.js',//load jquery so that angular will leverage it and not serve with jqLite that has poor API
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'webapp/http/js/lib/angular-ui-bootstrap/0.6.0/angular-ui.min.js', //needed since contains $modal
      'webapp/http/js/application/**/*.js',
      'webapp/http/js/application/console/**/*.js',
      'webapp/http/js/lib/angular-translate/angular-translate.js',
      'webapp/http/js/lib/angular-translate/angular-translate-loader-static-files.min.js',
      //'webapp/http/js/application/utils/translateService.js',
      'webapp/http/js/lib/angular-ui-bootstrap/0.6.0/angular-ui.min.js',
      'webapp/templates/**/*.html',
      'test/utils/**/*.js',
      'test/unit/**/*.js'
    ],

    // list of files to exclude
    exclude: [
       'webapp/http/js/console.js',
       'webapp/http/js/console/utils/e2eBackendMocks.js',//excluded because it references consoleApp
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
