const { join } = require('path')
const store = require('./src/helpers/store').store

exports.config = {
  runner: 'local',
  path: '/',
  specs: [
      './test/features/calculator.feature'
  ],
  maxInstances: 1,
  capabilities: [{
    maxInstances: 5,
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: ['--disable-gpu', '--disable-browser-side-navigation', '--disable-dev-shm-usage']
    },
  }],
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: 'silent',
  bail: 0,
  waitforTimeout: 5000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 1,
  services: ['chromedriver',   
    'selenium-standalone',      
    ['image-comparison', {
      baselineFolder: './image/baseline/desktop_chrome',
      formatImageName: `scenario-{width}x{height}`,
      screenshotPath: join(process.cwd(), '.tmp/'),
      savePerInstance: true,
      autoSaveBaseline: true,
      blockOutStatusBar: true,
      blockOutToolBar: true,
    }], 
  ],
  seleniumLogs: 'logs',
  seleniumInstallArgs: {
    drivers: {
      chrome: { version: 'latest' }
    }
  },
  seleniumArgs: {
    drivers: {
      chrome: { version: 'latest' }
    }
  },
  framework: 'cucumber',
  reporters: ['spec'],
  cucumberOpts: {
    require: ['./src/step-definitions/*'],  // <string[]> (file/dir) require files before executing features
    backtrace: true,    // <boolean> show full backtrace for errors
    compiler: [],       // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    dryRun: false,      // <boolean> invoke formatters without executing steps
    failFast: false,    // <boolean> abort the run on first failure
    format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    colors: true,       // <boolean> disable colors in formatter output
    snippets: true,     // <boolean> hide step definition snippets for pending steps
    source: true,       // <boolean> hide source URIs
    profile: [],        // <string[]> (name) specify the profile to use
    strict: true,       // <boolean> fail if there are any undefined or pending steps
    tagExpression: '',  // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    timeout: 30000,     // <number> timeout for step definitions
    ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
  },
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
}
