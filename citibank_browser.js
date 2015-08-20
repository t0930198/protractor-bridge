"use strict";

require("./helpers/setup");

var wd = require("wd"),
  _ = require('underscore'),
  actions = require("./helpers/actions"),
  serverConfigs = require('./helpers/appium-servers'),
  _p = require('./helpers/promise-utils'),
  webdriver = require('selenium-webdriver');
protractor = require('./lib/protractor');

//wd.addPromiseChainMethod('swipe', actions.swipe);
describe("citiTest_", function() {
  this.timeout(300000);
  var allPassed = true;
  var count = 1;
  var seats = [20, 35];
  var seat;
  before(function() {
    seat = seats[browser.params.seat];
    var width = 400;
    var height = 650;
    browser.driver.manage().window().setSize(width, height);
    browser.get('http://127.0.0.1:5000');
    browsers[0] = browser;
    elements[0] = element;
    var i = 1;
    for (; i < count; i++) {
      browsers[i] = browser.forkNewDriverInstance(true);
      elements[i] = browsers[i].element;
    }
  });

  after(function() {
    _.each(browsers, function(browser) {
      browser.sleep(10000);
    });
  });

  afterEach(function() {
    allPassed = allPassed && this.currentTest.state === 'passed';
  });
  var browsers = [count],
    elements = [count];

  it("1 選電影", function() {
    _.each(browsers, function(browser) {
      browser.element.all(by.css('.movie-Info')).get(2).click();

    });
  });
  it('2-A 滑動電影', function() {
    _.each(browsers, function(browser) {
      // browser.sleep(500);
      // browser.actions().dragAndDrop(
      //   browser.element(by.css('[on-slide-changed="setMovie($index)"]')), {
      //     x: -100,
      //     y: 0
      //   }
      // ).perform();
      browser.sleep(500);
      browser.actions().dragAndDrop(
        browser.element(by.css('[on-slide-changed="setMovie($index)"]')), {
          x: -100,
          y: 0
        }
      ).perform();
      browser.sleep(500);
      browser.actions().dragAndDrop(
        browser.element(by.css('[on-slide-changed="setMovie($index)"]')), {
          x: -100,
          y: 0
        }
      ).perform();
      browser.sleep(500);

    });
  });
  it('2-1 選擇影城', function() {
    _.each(browsers, function(browser) {

      browser.element.all(by.css('[ng-click="setCinema(cinema)"]')).get(2).click();
      browser.sleep(500);
    });
  });
  it('2-2 選擇日期時間', function() {
    _.each(browsers, function(browser) {
      browser.sleep(1000);
      browser.element.all(by.css('[ng-click="setDate(showDay)"]')).get(2).click();
      browser.sleep(1000);
      browser.element.all(by.css('[ng-click="setTime(session)"]')).get(1).click();

    });
  });
  it('滑', function() {
    _.each(browsers, function(browser) {
      browser.sleep(500);
      browser.executeScript('$(".movieInfo-bg.scroll-content.ionic-scroll.has-header.has-tabs").trigger(\'goDown\',[250])');
    });
  })
  xit('2-3-1 填卡號 無優惠', function() {
    _.each(browsers, function(browser) {
      browser.sleep(400);
      browser.element.all(by.css('[ng-model="cardNumInput.card8Number1"]')).get(0).clear().sendKeys('4311');
      browser.sleep(400);
      browser.element.all(by.css('[ng-model="cardNumInput.card8Number2"]')).get(0).clear().sendKeys('7854');
      browser.sleep(400);
      browser.element.all(by.css('[ng-model="cardNumInput.card8Number3"]')).get(0).clear().sendKeys('2222');
      browser.sleep(400);
      browser.element.all(by.css('[ng-model="cardNumInput.card8Number4"]')).get(0).clear().sendKeys('2226');
      browser.sleep(400);
      browser.element.all(by.css('.ticket-title')).get(0).click();
      browser.sleep(1000);
    });
  });
  xit('2-3 看票價', function() {
    _.each(browsers, function(browser) {
      browser.sleep(200);
      browser.element.all(by.css('[ng-click="addRemoveTicket(ticket,1)"]')).get(0).click();
      browser.sleep(200);
      browser.element.all(by.css('[ng-click="addRemoveTicket(ticket,1)"]')).get(1).click();
      browser.sleep(2000);
    });
  });
  xit('2-3-2 填卡號 一般優惠', function() {
    _.each(browsers, function(browser) {
      browser.sleep(400);
      browser.element.all(by.css('[ng-model="cardNumInput.card8Number1"]')).get(0).clear().sendKeys('4311');
      browser.sleep(400);
      browser.element.all(by.css('[ng-model="cardNumInput.card8Number2"]')).get(0).clear().sendKeys('7800');
      browser.sleep(400);
      browser.element.all(by.css('[ng-model="cardNumInput.card8Number3"]')).get(0).clear().sendKeys('2222');
      browser.sleep(400);
      browser.element.all(by.css('[ng-model="cardNumInput.card8Number4"]')).get(0).clear().sendKeys('2228');
      browser.sleep(400);
      browser.element.all(by.css('.ticket-title')).get(0).click();
      browser.sleep(1000);
    });
  });
  xit('2-3 看票價', function() {
    _.each(browsers, function(browser) {
      browser.sleep(200);
      browser.element.all(by.css('[ng-click="addRemoveTicket(ticket,1)"]')).get(0).click();
      browser.sleep(200);
      browser.element.all(by.css('[ng-click="addRemoveTicket(ticket,1)"]')).get(1).click();
      browser.sleep(2000);
    });
  });
  it('2-3-3 填卡號 優惠聯名', function() {
    _.each(browsers, function(browser) {
      browser.sleep(400);
      browser.element.all(by.css('[ng-model="cardNumInput.card8Number1"]')).get(0).clear().sendKeys('4563');
      browser.sleep(400);
      browser.element.all(by.css('[ng-model="cardNumInput.card8Number2"]')).get(0).clear().sendKeys('1863');
      browser.sleep(400);
      browser.element.all(by.css('[ng-model="cardNumInput.card8Number3"]')).get(0).clear().sendKeys('2222');
      browser.sleep(400);
      browser.element.all(by.css('[ng-model="cardNumInput.card8Number4"]')).get(0).clear().sendKeys('2228');
      browser.sleep(400);
      browser.element.all(by.css('.ticket-title')).get(0).click();
      browser.sleep(1000);

    });
  });
  xit('2-B 票種說明', function() {

  });
  it('2-4 選票', function() {
    _.each(browsers, function(browser) {
      browser.sleep(400);
      browser.element.all(by.css('[ng-click="addRemoveTicket(ticket,1)"]')).get(0).click();
      browser.sleep(400);
      browser.element.all(by.css('[ng-click="addRemoveTicket(ticket,1)"]')).get(0).click();
      browser.sleep(600);
      browser.element.all(by.css('[ng-click="addRemoveTicket(ticket,1)"]')).get(1).click();
      browser.sleep(2000);
      browser.element.all(by.css('[ng-click="selectSeat()"]')).get(0).click();
      browser.sleep(200);
    });
  });
  it('2-5-1 登入', function() {
    _.each(browsers, function(browser) {
      browser.sleep(300);
      browser.element.all(by.css('input[ng-model="input.account"]')).get(0).sendKeys('ichen@ntut.edu.tw');
      browser.sleep(300);
      browser.element.all(by.css('input[ng-model="input.password"]')).get(0).sendKeys('dj/4ej03');
      browser.sleep(1000);
      browser.element.all(by.css('.button.button-full.button-stable')).get(0).click();
      browser.sleep(500);
    });

  });
  it('3-1 三個座位', function() {
    _.each(browsers, function(browser) {
      browser.sleep(1000);
      browser.element.all(by.css('.button-positive')).get(0).click();
      browser.sleep(500);
      browser.element.all(by.css('.button-positive')).get(0).click();
      browser.sleep(500);
      browser.element.all(by.css('.button-positive')).get(0).click();
      browser.sleep(1000);
      browser.element.all(by.css('.button-stable')).get(seat).click();
      browser.sleep(500);
      browser.element.all(by.css('.button-stable')).get(seat).click();
      browser.sleep(500);
      browser.element.all(by.css('.button-stable')).get(seat).click();
    });
  });
  it('3-2 計價付款', function() {

    _.each(browsers, function(browser) {
      browser.sleep(4000);
      browser.element.all(by.css('[ng-click="selectSeat()"]')).get(1).click();
      browser.sleep(1000);

    });
  });
  it('4-A-1 變更發票', function() {
    _.each(browsers, function(browser) {
      browser.element.all(by.css('[ng-click="changeCard(4)"]')).get(0).click();
      browser.sleep(1000);

    });
  });
  it('4-A-2 紙本發票', function() {
    _.each(browsers, function(browser) {
      browser.element.all(by.css('[ng-click="setInvoice(4);stopPropagation($event)"]')).get(0).click();
      browser.sleep(2000);

    });
  });
  it('4-A-3 點選完成', function() {
    _.each(browsers, function(browser) {
      browser.element.all(by.css('.moviePay-card-back.eInvoice.scroll-view.ionic-scroll')).get(0).click();
      browser.sleep(1000);

    });
  });
  it('4-B 電影的i', function() {
    _.each(browsers, function(browser) {
      browser.element.all(by.css('[ng-click="changeCard(1)"]')).get(0).click();
      browser.sleep(2000);
      browser.element.all(by.css('.moviePay-card-back.vieshows.scroll-view.ionic-scroll')).get(0).click();
      browser.sleep(1000);

    });
  });
  it('4-C 發票的i', function() {
    _.each(browsers, function(browser) {
      browser.element.all(by.css('[ng-click="changeCard(2)"]')).get(0).click();
      browser.sleep(2000);
      browser.element.all(by.css('.moviePay-card-back.eInvoice.scroll-view.ionic-scroll')).get(0).click();
      browser.sleep(1000);

    });
  });
  it('4-D 信用卡的i', function() {
    _.each(browsers, function(browser) {
      browser.element.all(by.css('[ng-click="changeCard(3)"]')).get(0).click();
      browser.sleep(2000);
      browser.element.all(by.css('.moviePay-card-back.citi.scroll-view.ionic-scroll')).get(0).click();
      browser.sleep(1000);

    });
  });
  xit('4-E 使用條款的i', function() {
    _.each(browsers, function(browser) {
      browser.element.all(by.css('[ng-click="changeCard(-1)"]')).get(0).click();
      browser.sleep(2000);
      browser.element.all(by.css('.moviePay-card-back.eInvoice.scroll-view.ionic-scroll')).get(0).click();
      browser.sleep(1000);

    });
  });
  it('5-1 到期日以及末三碼', function() {
    _.each(browsers, function(browser) {
      browser.element.all(by.css('[ng-model="cardInf.expiredMonth"]')).sendKeys('08');
      browser.sleep(1000);
      browser.element.all(by.css('[ng-model="cardInf.expiredYear"]')).sendKeys('28');
      browser.sleep(1000);
      browser.element.all(by.css('[ng-model="cardInf.cvv"]')).sendKeys('aaa');
      browser.sleep(1000);
    });
  });
  it('go to pocket', function() {
    _.each(browsers, function(browser) {
      browser.element.all(by.css('[ng-click="goPay()"]')).get(0).click();
      browser.sleep(2000);

    });
  });


});