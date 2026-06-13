exports.config = {
  runner: 'local',
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
  services: ['chromedriver'],
  framework: 'cucumber',
  reporters: ['spec'],
  cucumberOpts: {
    require: ['./src/step-definitions/*'],  // <string[]> (file/dir) require files before executing features
    dryRun: false,      // <boolean> invoke formatters without executing steps
    failFast: false,    // <boolean> abort the run on first failure
    snippets: true,     // <boolean> hide step definition snippets for pending steps
    tagExpression: '',  // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    timeout: 30000,     // <number> timeout for step definitions
    ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
  }
}
