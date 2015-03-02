exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'e2e/*.js'
  ],

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
        args: ['--disable-web-security',//to allow CORS
               '--ignore-certificate-errors',
               ]
    }
  },

  chromeOnly: true,

  baseUrl: 'http://localhost:7000',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};


