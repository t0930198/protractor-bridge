// var wd = require('wd'),
//     wdBridge = require('wd-bridge')(require('protractor'), wd),
//     _ = require('underscore');

// // An example configuration file.
// var config = {
//   seleniumAddress: 'http://localhost:5723/wd/hub',

//   // Capabilities to be passed to the webdriver instance.
//   capabilities: _({}).chain()
//     .extend(require("../helpers/caps").ios81)
//     .extend({'browserName': 'safari'})
//     .omit('app').value(),
//   // Spec patterns are relative to the current working directly when
//   // protractor is called.
//   specs: ['../citibank.js'],

//   // Options to be passed to Jasmine-node.
//   jasmineNodeOpts: {
//     showColors: true,
//     defaultTimeoutInterval: 30000
//   },

//   // configuring wd in onPrepare
//   onPrepare: function () {
//     wdBridge.initFromProtractor(config);
//   }

// };
var config = {

	framework: 'mocha',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	// specs: ['../citibank.js'],
	specs: ['citibank_browser.js'],
	capabilities: {
		'browserName': 'chrome'
	},
	params: {
		account: "",
		password: "",
		seat: 0
	},
	baseUrl: 'http://localhost:5000'
}
exports.config = config;