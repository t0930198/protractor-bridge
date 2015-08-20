exports._A = {
  browserName: '',
  'appium-version': '1.3',
  platformName: 'Android',
  platformVersion: '5.0.1',
  // autoWebview: true,
  deviceName: '192.168.1.62:5555',
  udid: '192.168.1.62:5555',
  // udid: 'emulator-5554',
  app: '/Users/yinghong_Hsu/git/appium-test/protractor-bridge/MainActivity-debug.apk' // will be set later
};

exports._B = {
  browserName: '',
  'appium-version': '1.3',
  platformName: 'Android',
  platformVersion: '5.0.1',
  // autoWebview: true,
  deviceName: '192.168.1.75:5555',
  udid: '192.168.1.75:5555',
  app: "/Users/yinghong_Hsu/git/appium-test/protractor-bridge/MainActivity-debug.apk" // will be set later
};

exports._C = {
  browserName: '',
  'appium-version': '1.3',
  platformName: 'Android',
  platformVersion: '5.0.1',
  // autoWebview: true,
  deviceName: '192.168.1.235:5555',
  udid: '192.168.1.235:5555',
  app: "/Users/yinghong_Hsu/git/appium-test/protractor-bridge/MainActivity-debug.apk" // will be set later
};

exports._ios = {
  browserName: '',
  'appium-version': '1.4.10',
  platformName: 'iOS',
  platformVersion: '8.4',
  deviceName: 'iPhone 5s',
  udid: 'c8f1044320c748644b69d68ad70d2ed076af842c',
  app: '/Users/yinghong_Hsu/Desktop/CitiApp.ipa' // will be set later
};

exports.tony = {
  browserName: '',
  'appium-version': '1.3',
  platformName: 'iOS',
  platformVersion: '8.4',
  deviceName: 'Yin-Hong 的 iPhone',
  app: '/Users/yinghong_Hsu/Desktop/CitiApp.ipa', // will be set later
  udid: 'c8f1044320c748644b69d68ad70d2ed076af842c',
  // bundleId: 'com.appcomm.apps',
  nativeInstrumentsLib: true
};

exports.selendroid16 = {
  browserName: '',
  'appium-version': '1.3',
  platformName: 'Android',
  platformVersion: '4.1',
  automationName: 'selendroid',
  deviceName: 'Android Emulator',
  app: undefined // will be set later
};
