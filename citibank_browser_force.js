"use strict";

require("./helpers/setup");

var wd = require("wd"),
  _ = require('underscore'),
  actions = require("./helpers/actions"),
  serverConfigs = require('./helpers/appium-servers'),
  _p = require('./helpers/promise-utils'),
  webdriver = require('selenium-webdriver'),
  q = require('q');
protractor = require('./lib/protractor');

//wd.addPromiseChainMethod('swipe', actions.swipe);
describe("citiTest_", function() {
  this.timeout(300000);
  var allPassed = true;
  var count = 1;
  var browsers = [count],
    elements = [count];
  before(function() {
    var timeouts = [];
    browser.get('http://127.0.0.1:5000');
    browsers[0] = browser;
    elements[0] = element;
    timeouts.push(browsers[0]);


    for (var i = 1; i < count; i++) {
      browsers[i] = browser.forkNewDriverInstance(true);
      elements[i] = browsers[i].element;
      timeouts.push(browsers[i]);
    }
    console.log(timeouts.length);
    return q.all(timeouts);
  });

  after(function() {
    _.each(browsers, function(browser) {
      browser.sleep(10000);
    });
  });

  afterEach(function() {
    allPassed = allPassed && this.currentTest.state === 'passed';
  });


  it("1 選電影", function() {
    var timeouts = [];
    _.each(browsers, function(browser) {
      var result = browser.element.all(by.css('.movie-Info')).get(2).click();

      timeouts.push(result);
    });
    return q.all(timeouts);
  });
  it('2-A 滑動電影', function() {
    var timeouts = [];
    _.each(browsers, function(browser) {

      var result = browser.sleep(500)
        .actions().dragAndDrop(
          browser.element(by.css('[on-slide-changed="setMovie($index)"]')), {
            x: -100,
            y: 0
          }
        ).perform()
        .sleep(500)
        .actions().dragAndDrop(
          browser.element(by.css('[on-slide-changed="setMovie($index)"]')), {
            x: -100,
            y: 0
          }
        ).perform();
        browser.sleep(500);

      timeouts.push(result);
    });
    return q.allSettled(timeouts);
  });
  it('2-1 選擇影城', function() {
    var timeouts = [];
    _.each(browsers, function(browser) {
      var result = browser.actions().dragAndDrop(
          browser.element(by.css('[on-slide-changed="setCinema($index)"]')), {
            x: -100,
            y: 0
          }
        ).perform()
        .sleep(500);
      timeouts.push(result);
    });
    return q.allSettled(timeouts);
  });
  it('2-2 選擇日期時間', function() {
    var timeouts = [];
    _.each(browsers, function(browser) {
      var result = browser.sleep(1000)
        .element.all(by.css('[ng-click="setDate(showDay)"]')).get(2).click()
        .sleep(1000)
        .element.all(by.css('[ng-click="setTime(session)"]')).get(1).click();

      timeouts.push(result);
    });
    return q.all(timeouts);
  });
  xit('2-3-1 填卡號 無優惠', function() {
    var timeouts = [];
    _.each(browsers, function(browser) {
      var result = browser.sleep(200)
        .element.all(by.css('[ng-model="cardNumInput.card8Number1"]')).get(0).clear().sendKeys('4311')
        .sleep(200)
        .element.all(by.css('[ng-model="cardNumInput.card8Number2"]')).get(0).clear().sendKeys('7854')
        .sleep(200)
        .element.all(by.css('[ng-model="cardNumInput.card8Number3"]')).get(0).clear().sendKeys('2222')
        .sleep(200)
        .element.all(by.css('[ng-model="cardNumInput.card8Number4"]')).get(0).clear().sendKeys('2226')
        .sleep(200)
        .element.all(by.css('[delegate-handle="slideBox1"]')).get(0).click()
        .sleep(1000);
      timeouts.push(result);
    });
    return q.all(timeouts);
  });
  xit('2-3-2 填卡號 一般優惠', function() {
    var timeouts = [];
    _.each(browsers, function(browser) {
      browser.sleep(200)
        .element.all(by.css('[ng-model="cardNumInput.card8Number1"]')).get(0).clear().sendKeys('4311')
        .sleep(200)
        .element.all(by.css('[ng-model="cardNumInput.card8Number2"]')).get(0).clear().sendKeys('7800')
        .sleep(200)
        .element.all(by.css('[ng-model="cardNumInput.card8Number3"]')).get(0).clear().sendKeys('2222')
        .sleep(200)
        .element.all(by.css('[ng-model="cardNumInput.card8Number4"]')).get(0).clear().sendKeys('2226')
        .sleep(200)
        .element.all(by.css('[delegate-handle="slideBox1"]')).get(0).click()
        .sleep(1000);
      timeouts.push(result);
    });
    return q.all(timeouts);
  });
  xit('2-3-3 填卡號 優惠聯名', function() {
    var timeouts = [];
    _.each(browsers, function(browser) {
      browser.sleep(200)
        .element.all(by.css('[ng-model="cardNumInput.card8Number1"]')).get(0).clear().sendKeys('4563')
        .sleep(200)
        .element.all(by.css('[ng-model="cardNumInput.card8Number2"]')).get(0).clear().sendKeys('1863')
        .sleep(200)
        .element.all(by.css('[ng-model="cardNumInput.card8Number3"]')).get(0).clear().sendKeys('2222')
        .sleep(200)
        .element.all(by.css('[ng-model="cardNumInput.card8Number4"]')).get(0).clear().sendKeys('2226')
        .sleep(200)
        .element.all(by.css('[delegate-handle="slideBox1"]')).get(0).click()
        .sleep(1000);

      timeouts.push(result);
    });
    return q.all(timeouts);
  });
  xit('2-B 票種說明～', function() {

  });
  xit('2-4 選票', function() {
    var timeouts = [];
    _.each(browsers, function(browser) {
      browser.sleep(200)
        .element.all(by.css('[ng-click="addRemoveTicket(ticket,1)"]')).get(0).click()
        .sleep(200)
        .element.all(by.css('[ng-click="addRemoveTicket(ticket,1)"]')).get(1).click()
        .sleep(2000)
        .element.all(by.css('[ng-click="selectSeat()"]')).get(0).click()
        .sleep(200)
      timeouts.push(result);
    });
    return q.all(timeouts);
  });
  xit('2-5-1 登入', function() {
    var timeouts = [];
    _.each(browsers, function(browser) {
      browser.sleep(300)
        .element.all(by.css('input[ng-model="input.account"]')).get(0).sendKeys('ichen@ntut.edu.tw')
        .sleep(300)
        .element.all(by.css('input[ng-model="input.password"]')).get(0).sendKeys('dj/4ej03')
        .sleep(200)
        .element.all(by.css('.button.button-full.button-stable')).get(0).click()
        .sleep(200);
      timeouts.push(result);
    });
    return q.all(timeouts);

  });
  xit('3-1 三個座位', function() {
    var timeouts = [];
    _.each(browsers, function(browser) {
      browser.sleep(200)
        .element.all(by.css('.button-positive')).get(0).click()
        .sleep(200)
        .element.all(by.css('.button-positive')).get(0).click()
        .sleep(200)
        .element.all(by.css('.button-positive')).get(0).click()
        .sleep(1000)
        .element.all(by.css('.button-stable')).get(20).click()
        .sleep(200)
        .element.all(by.css('.button-stable')).get(20).click()
        .sleep(200)
        .element.all(by.css('.button-stable')).get(20).click();
      timeouts.push(result);
    });
    return q.all(timeouts);
  });
  xit('3-2 計價付款', function() {
    var timeouts = [];
    _.each(browsers, function(browser) {
      browser.sleep(2000)
        .element.all(by.css('[ng-click="selectSeat()"]')).get(1).click()
        .sleep(1000);

      timeouts.push(result);
    });
    return q.all(timeouts);
  });
  xit('4-A-1 變更發票', function() {
    var timeouts = [];
    _.each(browsers, function(browser) {
      browser.element.all(by.css('[ng-click="changeCard(4)"]')).get(0).click();
      browser.sleep(1000);

    });
  });
  xit('4-A-2 紙本發票', function() {
    var timeouts = [];
    _.each(browsers, function(browser) {
      browser.element.all(by.css('[ng-click="setInvoice(4);stopPropagation($event)"]')).get(0).click();
      browser.sleep(2000);

    });
  });
  xit('4-A-3 點選完成', function() {
    var timeouts = [];
    _.each(browsers, function(browser) {
      browser.element.all(by.css('.moviePay-card-back.eInvoice.scroll-view.ionic-scroll')).get(0).click();
      browser.sleep(1000);

    });
  });
  xit('4-B 電影的i', function() {
    var timeouts = [];
    _.each(browsers, function(browser) {
      browser.element.all(by.css('[ng-click="changeCard(1)"]')).get(0).click();
      browser.sleep(2000);
      browser.element.all(by.css('.moviePay-card-back.vieshows.scroll-view.ionic-scroll')).get(0).click();
      browser.sleep(1000);

    });
  });
  xit('4-C 發票的i', function() {
    var timeouts = [];
    _.each(browsers, function(browser) {
      browser.element.all(by.css('[ng-click="changeCard(2)"]')).get(0).click();
      browser.sleep(2000);
      browser.element.all(by.css('.moviePay-card-back.eInvoice.scroll-view.ionic-scroll')).get(0).click();
      browser.sleep(1000);

    });
  });
  xit('4-D 信用卡的i', function() {
    var timeouts = [];
    _.each(browsers, function(browser) {
      browser.element.all(by.css('[ng-click="changeCard(3)"]')).get(0).click();
      browser.sleep(2000);
      browser.element.all(by.css('.moviePay-card-back.citi.scroll-view.ionic-scroll')).get(0).click();
      browser.sleep(1000);

    });
  });
  xit('4-E 使用條款的i', function() {
    var timeouts = [];
    _.each(browsers, function(browser) {
      browser.element.all(by.css('[ng-click="changeCard(-1)"]')).get(0).click();
      browser.sleep(2000);
      browser.element.all(by.css('.moviePay-card-back.eInvoice.scroll-view.ionic-scroll')).get(0).click();
      browser.sleep(1000);

    });
  });
  xit('5-1 到期日以及末三碼', function() {
    var timeouts = [];
    _.each(browsers, function(browser) {
      browser.element.all(by.css('[ng-model="cardInf.expiredDate"]')).sendKeys('1203');
      browser.sleep(1000);

    });
  });
  xit('go to pocket', function() {
    _.each(browsers, function(browser) {
      browser.element.all(by.css('.bar.bar-footer.bar-assertive')).get(2).click();
      browser.sleep(2000);
    });
  });


});