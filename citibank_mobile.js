"use strict";

require("./helpers/setup");

var wd = require("wd"),
  _ = require('underscore'),
  actions = require("./helpers/actions"),
  serverConfigs = require('./helpers/appium-servers'),
  _p = require('./helpers/promise-utils'),
  q = require('q');
var members = require('./helpers/members').members;
//wd.addPromiseChainMethod('swipe', actions.swipe);

describe("citiTest", function() {
  console.log(should);
  this.timeout(250000);
  var allPassed = true;
  var drivers = [];
  var ports = [4725, 4729, 4733, 4737];
  before(function() {
    var timeouts = [];
    for (var i = 0; i < 3; i++) {
      var member = members[i];
      var config = serverConfigs.local;
      config.port = ports[i];
      var driver = wd.promiseChainRemote(config);
      drivers.push(driver);
      member.app = '/Users/yinghong_Hsu/git/appium-test/protractor-bridge/CitiBank.apk';
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

    })
  });
  afterEach(function() {
    allPassed = allPassed && this.currentTest.state === 'passed';
  });
  it("1 選電影", function() {
    var timeouts = [];
    _.each(drivers, function(driver) {
      var result = driver
        .sleep(2000)
        .execute(function() {
          tapClick({
            target: $('.movie-Info')[2]
          });
        }, [], null)
        .sleep(1500);
      timeouts.push(result);
    });
    return q.all(timeouts);
  });
  it('2-A 滑動電影', function() {
    var timeouts = [];
    _.each(drivers, function(driver) {
      var result = driver
        .sleep(2000)
        .execute(function() {
          $('[delegate-handle="MovieSlideBox"]').trigger('movieChangeRight');
        }, null)
        .sleep(1000)
        .execute(function() {
          $('[delegate-handle="MovieSlideBox"]').trigger('movieChangeRight');
        }, null)
        .sleep(1000);
      timeouts.push(result);
    });
    return q.all(timeouts);
  });
  it('2-1 選擇影城', function() {
    var timeouts = [];
    _.each(drivers, function(driver) {
      var result = driver
        .sleep(2000)
        // .execute(function() {
        //   $('[delegate-handle="CinemaSlideBox"]').trigger('cinemaChangeRight');
        // }, null)
        // .sleep(1000)
        // .execute(function() {
        //   $('[delegate-handle="CinemaSlideBox"]').trigger('cinemaChangeRight');
        // }, null)
        .execute(function() {
          tapClick({
            target: $('[ng-click="setCinema(cinema)"]')[0]
          });
        }, null)
        .sleep(1000);
      timeouts.push(result);
    });
    return q.all(timeouts);
  });
  it("2-2 選擇日期時間", function() {
    var timeouts = [];
    _.each(drivers, function(driver) {
      var result = driver
        .sleep(1000)
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
  it('~ 滑', function() {
    var timeouts = [];
    _.each(drivers, function(driver) {
      var result = driver
        .sleep(1000)
        .execute(function() {
          $('.movieInfo-bg').trigger('goDown', [500]);
        }, null)
        .sleep(1000)
      timeouts.push(result);
    });
    return q.all(timeouts);
  });
  xit("2-3-1 填卡號 無優惠", function() {
    var timeouts = [];
    _.each(drivers, function(driver) {
      var result = driver
        .sleep(1500)
        .execute(function() {
          tapClick({
            target: $('[ng-model="cardNumInput.card8Number1"]')[0]
          });
        }, [], null)
        .sleep(500)
        .elementByCss('[ng-model="cardNumInput.card8Number1"]').clear().sendKeys('4311').sleep(1000)
        .sleep(500)
        .elementByCss('[ng-model="cardNumInput.card8Number2"]').clear().sendKeys('7854').sleep(1000)
        .sleep(500)
        .elementByCss('[ng-model="cardNumInput.card8Number3"]').clear().sendKeys('2222').sleep(1000)
        .sleep(500)
        .elementByCss('[ng-model="cardNumInput.card8Number4"]').clear().sendKeys('2226').sleep(1000)
        .execute(function() {
          $('[ng-model="cardNumInput.card8Number4"]').empty().blur();
        }, [], null)
        .sleep(1000);
      timeouts.push(result);
    });
    return q.all(timeouts);
  });
  xit('~ 滑', function() {
    var timeouts = [];
    _.each(drivers, function(driver) {
      var result = driver
        .sleep(1500)
        .execute(function() {
          $('.movieInfo-bg').trigger('goDown', [300]);
        }, null)
        .sleep(500)
        .execute(function() {
          tapClick({
            target: $('[ng-click="addRemoveTicket(ticket,1)"]')[0]
          });
        }, [], null)
        .sleep(500)
        // .execute(function() {
        //   tapClick({
        //     target: $('[ng-click="addRemoveTicket(ticket,1)"]')[0]
        //   });
        // }, [], null)
        // .sleep(500)
        .execute(function() {
          tapClick({
            target: $('[ng-click="addRemoveTicket(ticket,1)"]')[1]
          });
        }, [], null)
        .sleep(1000)
        .execute(function() {
          $('.movieInfo-bg').trigger('goDown', [-300]);
        }, null)
        .sleep(500)
      timeouts.push(result);
    });
    return q.all(timeouts);
  });
  xit("2-3-2 填卡號 一般優惠", function() {
    var timeouts = [];
    _.each(drivers, function(driver) {
      var result = driver
        .sleep(1500)
        .execute(function() {
          tapClick({
            target: $('[ng-model="cardNumInput.card8Number1"]')[0]
          });
        }, [], null)
        .sleep(500)
        .elementByCss('[ng-model="cardNumInput.card8Number1"]').clear().sendKeys('4311').sleep(1000)
        .sleep(500)
        .elementByCss('[ng-model="cardNumInput.card8Number2"]').clear().sendKeys('7800').sleep(1000)
        .sleep(500)
        .elementByCss('[ng-model="cardNumInput.card8Number3"]').clear().sendKeys('2222').sleep(1000)
        .sleep(500)
        .elementByCss('[ng-model="cardNumInput.card8Number4"]').clear().sendKeys('2228').sleep(1000)
        .execute(function() {
          $('[ng-model="cardNumInput.card8Number4"]').empty().blur();
        }, [], null)
        .sleep(1000);
      timeouts.push(result);
    });
    return q.all(timeouts);
  });
  xit('~ 滑', function() {
    var timeouts = [];
    _.each(drivers, function(driver) {
      var result = driver
        .sleep(1000)
        .execute(function() {
          $('.movieInfo-bg').trigger('goDown', [300]);
        }, null)
        .sleep(500)
        .execute(function() {
          tapClick({
            target: $('[ng-click="addRemoveTicket(ticket,1)"]')[0]
          });
        }, [], null)
        .sleep(500)
        // .execute(function() {
        //   tapClick({
        //     target: $('[ng-click="addRemoveTicket(ticket,1)"]')[0]
        //   });
        // }, [], null)
        // .sleep(500)
        .execute(function() {
          tapClick({
            target: $('[ng-click="addRemoveTicket(ticket,1)"]')[1]
          });
        }, [], null)
        .sleep(1000)
        .execute(function() {
          $('.movieInfo-bg').trigger('goDown', [-300]);
        }, null)
        .sleep(500)
      timeouts.push(result);
    });
    return q.all(timeouts);
  });
  it("2-3-3 填卡號 優惠聯名", function() {
    var timeouts = [];
    _.each(drivers, function(driver) {
      var result = driver
        .sleep(1500)
        .execute(function() {
          tapClick({
            target: $('[ng-model="cardNumInput.card8Number1"]')[0]
          });
        }, [], null)
        .sleep(500)
        .elementByCss('[ng-model="cardNumInput.card8Number1"]').clear().sendKeys('4563').sleep(1000)
        .sleep(500)
        .elementByCss('[ng-model="cardNumInput.card8Number2"]').clear().sendKeys('1863').sleep(1000)
        .sleep(500)
        .elementByCss('[ng-model="cardNumInput.card8Number3"]').clear().sendKeys('2222').sleep(1000)
        .sleep(500)
        .elementByCss('[ng-model="cardNumInput.card8Number4"]').clear().sendKeys('2228').sleep(1000)
        .execute(function() {
          $('[ng-model="cardNumInput.card8Number4"]').empty().blur();
        }, [], null)
        .sleep(1000);
      timeouts.push(result);
    });
    return q.all(timeouts);
  });
  it('~ 滑', function() {
    var timeouts = [];
    _.each(drivers, function(driver) {
      var result = driver
        .sleep(1000)
        .execute(function() {
          $('.movieInfo-bg').trigger('goDown', [300]);
        }, null)
        .sleep(1000)
      timeouts.push(result);
    });
    return q.all(timeouts);
  });

  xit('2-B 票種說明', function() {

  });
  it("2-4 選票", function() {
    var timeouts = [];
    _.each(drivers, function(driver) {
      var result = driver
        .sleep(500)
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
        .sleep(500)
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
        .sleep(1000);
      timeouts.push(result);
    });
    return q.all(timeouts);
  });
  it('')

  it("2-5-1 登入", function() {
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
  xit("3-1 三個座位", function() {
    var timeouts = [];
    _.each(drivers, function(driver) {
      var result = driver
        .sleep(2000)
        .execute(function() {
          tapClick({
            target: $('.button-positive')[0]
          });
        }, [], null)
        .sleep(500)
        .execute(function() {
          tapClick({
            target: $('.button-positive')[0]
          });
        }, [], null)
        .sleep(500)
        .execute(function() {
          tapClick({
            target: $('.button-positive')[0]
          });
        }, [], null)
        .sleep(1000)
        .execute(function() {
          tapClick({
            target: $('.button-stable')[20]
          });
        }, [], null)
        .sleep(500)
        .execute(function() {
          tapClick({
            target: $('.button-stable')[20]
          });
        }, [], null)
        .sleep(500)
        .execute(function() {
          tapClick({
            target: $('.button-stable')[20]
          });
        }, [], null)
      timeouts.push(result);
    });
    return q.all(timeouts);
  });
  it("3-2 計價付款", function() {
    var timeouts = [];
    _.each(drivers, function(driver) {
      var result = driver
        .sleep(1500)
        .execute(function() {
          tapClick({
            target: $('[ng-click="selectSeat()"]')[1]
          });
        }, [], null)
        .sleep(3000)
      timeouts.push(result);
    });
    return q.allSettled(timeouts).done(function(result) {});
  });
  xit('4-A-1 變更發票', function() {
    var timeouts = [];
    _.each(drivers, function(driver) {
      var result = driver
        .sleep(1000)
        .execute(function() {
          tapClick({
            target: $('[ng-click="changeCard(4)"]')[0]
          });
        })
        .sleep(1500);
      timeouts.push(result);
    });
    return q.allSettled(timeouts);
  });
  xit('4-A-2 紙本發票', function() {
    var timeouts = [];
    _.each(drivers, function(driver) {
      var result = driver
        .sleep(1000)
        .execute(function() {
          tapClick({
            target: $('[ng-click="setInvoice(4);stopPropagation($event)"]')[0]
          });
        })
        .sleep(500);
      timeouts.push(result);
    });
    return q.allSettled(timeouts);
  });
  xit('4-A-3 點選完成', function() {
    var timeouts = [];
    _.each(drivers, function(driver) {
      var result = driver
        .sleep(1000)
        .execute(function() {
          tapClick({
            target: $('.moviePay-card-back.eInvoice.scroll-view.ionic-scroll')[0]
          });
        })
        .sleep(500);
      timeouts.push(result);
    });
    return q.allSettled(timeouts);
  });
  xit('4-B 電影的i', function() {
    var timeouts = [];
    _.each(drivers, function(driver) {
      var result = driver
        .sleep(1000)
        .execute(function() {
          tapClick({
            target: $('[ng-click="changeCard(1)"]')[0]
          });
        })
        .sleep(500);
      timeouts.push(result);
    });
    return q.allSettled(timeouts);
  });
  xit('4-C 發票的i', function() {
    var timeouts = [];
    _.each(drivers, function(driver) {
      var result = driver
        .sleep(1000)
        .execute(function() {
          tapClick({
            target: $('[ng-click="changeCard(2)"]')[0]
          });
        })
        .sleep(500);
      timeouts.push(result);
    });
    return q.allSettled(timeouts);
  });
  xit('4-D 信用卡的i', function() {
    var timeouts = [];
    _.each(drivers, function(driver) {
      var result = driver
        .sleep(1000)
        .execute(function() {
          tapClick({
            target: $('[ng-click="changeCard(3)"]')[0]
          });
        })
        .sleep(500);
      timeouts.push(result);
    });
    return q.allSettled(timeouts);
  });
  xit('4-E 使用條款的i', function() {
    var timeouts = [];
    _.each(drivers, function(driver) {
      var result = driver
        .sleep(1000)
        .execute(function() {
          tapClick({
            target: $('[ng-click="changeCard(-1)"]')[0]
          });
        })
        .sleep(500);
      timeouts.push(result);
    });
    return q.allSettled(timeouts);
  });
  it('~ 滑', function() {
    var timeouts = [];
    _.each(drivers, function(driver) {
      var result = driver
        .sleep(1000)
        .execute(function() {
          $('[delegate-handle="MainScroll"]').trigger('goDown', [300]);
        }, null)
        .sleep(1000)
      timeouts.push(result);
    });
    return q.all(timeouts);
  });
  it('5-1 到期日以及末三碼', function() {
    var timeouts = [];
    _.each(drivers, function(driver) {
      var result = driver
        .sleep(1000)
        .elementByCss('[ng-model="cardInf.expiredDate"]').sendKeys('1203')
        .sleep(500)
        .elementByCss('[ng-model="cardInf.cvv"]').sendKeys('123')
        .sleep(500);
      timeouts.push(result);
    });
    return q.allSettled(timeouts);
  });

  it("go to pocket", function() {

    var timeouts = [];
    _.each(drivers, function(driver) {
      var result = driver
        // .sleep(1000)
        // .elementByCss('[ng-click="goPay()"]', function(err, els) {
        //   els.should.eventually.exist;
        // })
        .sleep(1000)
        .execute(function() {
          tapClick({
            target: $('[ng-click="goPay()"]')[0]
          });
        }, [], null);
      //.should.not.be.eql(undefined);
      // .done(success(driver), error(driver));
      timeouts.push(result);
    });
    return q.allSettled(timeouts);
  });
});