exports.config = {  
        capabilities: {
            'browserName': 'chrome',
            'chromeOptions': {                
                args: ['--disable-web-security']
            } 
        },
        baseUrl: 'http://localhost:8100',
        specs: [
            'e2e-tests/**/*.tests.js'
        ],
        allScriptsTimeout: 20000,
        jasmineNodeOpts: {
            isVerbose: true,
            showColors: true,
            defaultTimeoutInterval: 100000
        }
};
