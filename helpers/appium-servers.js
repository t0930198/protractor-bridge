
exports.local = {
  host: 'localhost',
  port: 4723
};
exports._B = {
  host: 'localhost',
  port: 4725	
};
exports._C = {
  host: 'localhost',
  port: 4727	
};
exports.app = {
	host: 'localhost',
	port: 4729
};

exports.sauce = {
  host: 'ondemand.saucelabs.com',
  port: 80,
  username: process.env.SAUCE_USERNAME,
  password: process.env.SAUCE_ACCESS_KEY
};
