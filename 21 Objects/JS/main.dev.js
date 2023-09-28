"use strict";

// Easy
var car = {
  brand: 'AUDI',
  year: 2018,
  averSreed: 250,
  drivers: ['Victor'],
  fuel: 8,
  distance: 400,
  showInfo: function showInfo() {
    for (var key in car) {
      if (typeof car[key] !== 'function') {
        console.log("Value of ".concat(key, " is ").concat(car[key]));
      }
    }
  },
  addDriver: function addDriver(driverName) {
    this.drivers.push(driverName);
  },
  checkDriver: function checkDriver(driverName) {
    return this.drivers.includes(driverName);
  },
  consumption: function consumption() {
    var fixFuel = this.distance / 100 * this.fuel;
    console.log("\u0432\u0441\u044C\u043E\u0433\u043E \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E ".concat(fixFuel, "\u043B. \u043F\u0430\u043B\u044C\u043D\u043E\u0433\u043E"));
  },
  calcTime: function calcTime(distance) {
    var hours = distance / this.averSreed;

    if (hours >= 12) {
      console.log("\u0447\u0430\u0441 \u0437\u0430 \u044F\u043A\u0438\u0439 \u0432\u0438 \u043F\u043E\u0434\u043E\u043B\u0430\u0454\u0442\u0435 \u0432\u0456\u0434\u0441\u0442\u0430\u043D\u044C \u0431\u0443\u0434\u0435: ".concat(hours + 3, " \u0433\u043E\u0434."));
    } else if (hours >= 8) {
      console.log("\u0447\u0430\u0441 \u0437\u0430 \u044F\u043A\u0438\u0439 \u0432\u0438 \u043F\u043E\u0434\u043E\u043B\u0430\u0454\u0442\u0435 \u0432\u0456\u0434\u0441\u0442\u0430\u043D\u044C \u0431\u0443\u0434\u0435: ".concat(hours + 2, " \u0433\u043E\u0434."));
    } else if (hours >= 4) {
      console.log("\u0447\u0430\u0441 \u0437\u0430 \u044F\u043A\u0438\u0439 \u0432\u0438 \u043F\u043E\u0434\u043E\u043B\u0430\u0454\u0442\u0435 \u0432\u0456\u0434\u0441\u0442\u0430\u043D\u044C \u0431\u0443\u0434\u0435: ".concat(hours + 1, " \u0433\u043E\u0434."));
    }
  }
};
car.addDriver('Dima');
console.log(car.checkDriver('Victor'));
car.showInfo();
car.distance = 2000;
car.consumption();
car.calcTime(2000); //normal

var time = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  displayTime: function displayTime() {
    var hoursStr = this.hours < 10 ? "0" + this.hours : this.hours.toString();
    var minutesStr = this.minutes < 10 ? "0" + this.minutes : this.minutes.toString();
    var secondsStr = this.seconds < 10 ? "0" + this.seconds : this.seconds.toString();
    console.log("".concat(hoursStr, ":").concat(minutesStr, ":").concat(secondsStr));
  },
  addSeconds: function addSeconds(seconds) {
    var totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds + seconds;
    this.hours = Math.floor(totalSeconds / 3600) % 24;
    var remainingSeconds = totalSeconds % 3600;
    this.minutes = Math.floor(remainingSeconds / 60);
    this.seconds = remainingSeconds % 60;
  },
  addMinutes: function addMinutes(minutes) {
    this.addSeconds(minutes * 60);
  },
  addHours: function addHours(hours) {
    this.addSeconds(hours * 3600);
  }
};
var currentTime = Object.create(time); // currentTime.hours = 20;
// currentTime.minutes = 59;
// currentTime.seconds = 45;

currentTime.displayTime();
currentTime.addSeconds(101);
currentTime.displayTime();
currentTime.addMinutes(250);
currentTime.displayTime();
currentTime.addHours(14);
currentTime.displayTime(); //max

var fraction = {
  nominator: 2,
  denominator: 3,
  showValue: function showValue() {
    console.log("Value is ".concat(this.nominator, "/").concat(this.denominator));
  },
  findGCD: function findGCD(a, b) {
    if (a == 0) {
      return b;
    }

    return this.findGCD(b % a, a);
  },
  findLocalNominator: function findLocalNominator(n, d) {
    return n * d;
  },
  add: function add(n, d) {
    var localDenominator = 1;

    if (this.denominator === d) {
      localDenominator = this.denominator;
    } else {
      localDenominator = this.denominator * d;
      this.nominator = this.nominator * (localDenominator / this.denominator);
      this.denominator = localDenominator;
      n = n * (localDenominator / d);
      d = localDenominator;
      var addingResultNominator = this.nominator + n;
      var gcd = this.findGCD(addingResultNominator, d);
      console.log("result is ".concat(addingResultNominator / gcd, "/").concat(d / gcd));
    }
  },
  subtraction: function subtraction(n, d) {
    var localDenominator = 1;

    if (this.denominator === d) {
      localDenominator = this.denominator;
    } else {
      localDenominator = this.denominator * d;
      this.nominator = this.nominator * (localDenominator / this.denominator);
      this.denominator = localDenominator;
      n = n * (localDenominator / d);
      d = localDenominator;
    }
  }
};