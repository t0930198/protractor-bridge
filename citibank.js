"use strict";

require("./helpers/setup");

var wd = require("wd"),
  _ = require('underscore'),
  actions = require("./helpers/actions"),
  serverConfigs = require('./helpers/appium-servers'),
  _p = require('./helpers/promise-utils'),
  q = require('q'),
  webdriver = require('selenium-webdriver'),
  protractor = require('./lib/protractor');
var members = require('./helpers/members').members;
//wd.addPromiseChainMethod('swipe', actions.swipe);

describe("citiTest", function() {
  this.timeout(250000);
  var allPassed = true;
  var browser;
  var drivers = [];
  var ports = [4725, 4729, 4733, 4737];
  before(function() {
    var timeouts = [];
    for (var i = 0; i < 2; i++) {
      var member = members[i];
      var config = serverConfigs.local;
      config.port = ports[i];
      var driver = wd.promiseChainRemote(config);
      drivers.push(driver);
      member.app = '/Users/yinghong_Hsu/git/appium-test/protractor-bridge/MainActivity-debug.apk';
      var t = driver.init(member).setImplicitWaitTimeout(3000);
      timeouts.push(t);
    }
    return q.all(timeouts);
  });

  after(function() {
    _.each(drivers, function(driver) {
      driver
        .sleep(4000)
        .quit()

    });
    _.each(browsers, function(browser) {
      browser.sleep(10000);
    });
  });
  afterEach(function() {
    allPassed = allPassed && this.currentTest.state === 'passed';
  });
  var browsers = [count],
    elements = [count];
  it('open browser', function() {
    // var browserOne = protractors[0].browser;
    // var browserTwo = protractors[1].browser;

    // var elementTwo = protractors[1].element;

    // var byOne = protractors[0].by;
    // var byTwo = protractors[1].by;

    // browserOne.get('http://127.0.0.1:5000/');
    // browserTwo.get('http://127.0.0.1:5000/');
    browser.get('http://127.0.0.1:5000');
    browsers[0] = browser;
    elements[0] = element;
    var i = 1;
    for (; i < count; i++) {
      browsers[i] = browser.forkNewDriverInstance(true);
      elements[i] = browsers[i].element;
    }
  });
  it("select movie", function() {
    var timeouts = [];
    _.each(drivers, function(driver) {
      var result = driver
        .sleep(2000)
        .execute(function() {
          tapClick({
            target: $('.movie-Info')[2]
          });
        }, [], null);
      timeouts.push(result);
    });
    return q.all(timeouts);
    _.each(browsers, function(browser) {
      browser.sleep(1000);
      browser.element.all(by.css('.movie-Info')).get(2).click();
      browser.sleep(500);
      console.log()
      browser.actions().dragAndDrop(
        browser.element(by.css('[on-slide-changed="setMovie($index)"]')), {
          x: -100,
          y: 0
        }
      ).perform();
      browser.sleep(500);
      browser.actions().dragAndDrop(
        browser.element(by.css('[on-slide-changed="setMovie($index)"]')), {
          x: 100,
          y: 0
        }
      ).perform();
      browser.sleep(500);
      browser.actions().dragAndDrop(
        browser.element(by.css('[on-slide-changed="setMovie($index)"]')), {
          x: 100,
          y: 0
        }
      ).perform();
      browser.sleep(500);

    });
  });
  xit('slide', function() {
    var timeouts = [];
    _.each(drivers, function(driver) {
      var result = driver
        .execute(function() {
          tapTouchMove({
            target: $('[on-slide-changed="setCinema($index)]"')[0]
          });
        }, [], null)
      timeouts.push(result);
    });
    return q.all(timeouts);
  });
  xit("select dateTime", function() {
    var timeouts = [];
    _.each(drivers, function(driver) {
      var result = driver
        .sleep(1500)
        .execute(function() {
          tapClick({
            target: $('[ng-click="setDate(showDay)"]')[2]
          });
        }, [], null)
        .sleep(1000)
        .execute(function() {
          tapClick({
            target: $('[ng-click="setTime(session)"]')[1]
          });
        }, [], null);
      timeouts.push(result);
    });
    return q.all(timeouts);
  });
  xit("fill card num", function() {
    var timeouts = [];
    _.each(drivers, function(driver) {
      var result = driver
        .sleep(1500)
        .execute(function() {
          tapClick({
            target: $('[ng-model="cardNumInput.card8Number1"]')[0]
          });
        }, [], null)
        .sleep(1500)
        .elementByCss('[ng-model="cardNumInput.card8Number1"]').clear().sendKeys('4311').sleep(1000)
        .sleep(500)
        .elementByCss('[ng-model="cardNumInput.card8Number2"]').clear().sendKeys('7821').sleep(1000)
        .sleep(500)
        .elementByCss('[ng-model="cardNumInput.card8Number3"]').clear().sendKeys('2222').sleep(1000)
        .sleep(500)
        .elementByCss('[ng-model="cardNumInput.card8Number4"]').clear().sendKeys('2226')
        .execute(function() {
          $('[ng-model="cardNumInput.card8Number4"]').empty().blur();
        }, [], null)
        .sleep(1500);
      // .then(function() {
      //   var smile = new wd.TouchAction();
      //   smile
      //     .press({
      //       x: 110,
      //       y: 300
      //     })
      //     .moveTo({
      //       x: 110,
      //       y: 30
      //     })
      //     .release();
      // })
      // .sleep(1000)
      timeouts.push(result);
    });
    return q.all(timeouts);
  });
  xit("choose ticket", function() {
    var timeouts = [];
    _.each(drivers, function(driver) {
      var result = driver
        .execute(function() {
          tapClick({
            target: $('[ng-click="addRemoveTicket(ticket,1)"]')[0]
          });
        }, [], null)
        .sleep(500)
        .execute(function() {
          tapClick({
            target: $('[ng-click="addRemoveTicket(ticket,1)"]')[0]
          });
        }, [], null)
        .sleep(1000)
        .execute(function() {
          tapClick({
            target: $('[ng-click="addRemoveTicket(ticket,1)"]')[1]
          });
        }, [], null)
        .sleep(500)
        .execute(function() {
          tapClick({
            target: $('[ng-click="selectSeat()"]')[0]
          });
        }, [], null)
        .sleep(1500);
      timeouts.push(result);
    });
    return q.all(timeouts);
  });

  xit("login", function() {
    var timeouts = [];
    _.each(drivers, function(driver) {
      var result = driver
        .sleep(500)
        .elementByCss('input[ng-model="input.account"]').clear().sendKeys('ichen@ntut.edu.tw')
        .sleep(500)
        .elementByCss('input[ng-model="input.password"]').clear().sendKeys('dj/4ej03')
        .execute(function() {
          tapClick({
            target: $('a[ng-click="edit(2)"]')[0]
          });
        }, [], null)
        .sleep(1500);
      timeouts.push(result);
    });
    return q.all(timeouts);
  });
  xit("change seat", function() {
    var timeouts = [];
    _.each(drivers, function(driver) {
      var result = driver
        .sleep(2000)
        .execute(function() {
          tapClick({
            target: $('.button-positive')[0]
          });
        }, [], null)
        .sleep(1000)
        .execute(function() {
          tapClick({
            target: $('.button-positive')[0]
          });
        }, [], null)
        .sleep(1000)
        .execute(function() {
          tapClick({
            target: $('.button-positive')[0]
          });
        }, [], null)
        .sleep(1500)
        .execute(function() {
          tapClick({
            target: $('.button-stable')[20]
          });
        }, [], null)
        .sleep(1000)
        .execute(function() {
          tapClick({
            target: $('.button-stable')[20]
          });
        }, [], null)
        .sleep(1000)
        .execute(function() {
          tapClick({
            target: $('.button-stable')[20]
          });
        }, [], null)
      timeouts.push(result);
    });
    return q.all(timeouts);
  });
  xit("go to payment", function() {
    var timeouts = [];
    _.each(drivers, function(driver) {
      var result = driver
        .sleep(1500)
        .execute(function() {
          tapClick({
            target: $('[ng-click="selectSeat()"]')[1]
          });
        }, [], null)
        .sleep(2000)
      timeouts.push(result);
    });
    return q.all(timeouts);
  });
  xit("go to pocket", function() {
    var timeouts = [];
    _.each(drivers, function(driver) {
      var result = driver
        .sleep(3000)
        .execute(function() {
          tapClick({
            target: $('.ion-chevron-right.movieInfo-icon')[1]
          });
        }, [], null)
        .sleep(3000);
      timeouts.push(result);
    });
    return q.all(timeouts);
  });
});



// xit("wrong account", function() {
//   var pass = true;
//   drivers.forEach(function(driver) {
//     pass = pass && driver
//       .sleep(1500)
//       .elementByCss('input[ng-model="input.account"]').sendKeys('iLab_tony')
//       .elementByCss('input[ng-model="input.password"]').sendKeys('12345678')
//       .execute(function() {
//         tapClick({
//           target: $('a[ng-click="edit(2)"]')[0]
//         });
//       }, [], null)
//       .sleep(1500)
//   })
//   return pass;
// });