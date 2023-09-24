"use strict";

// Easy
var car = {
  brand: 'AUDI',
  year: 2018,
  averSreed: 250,
  drivers: ['Brian'],
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
    var fix = this.distance / 100 * this.fuel;
    console.log(fix);
  },
  calcTime: function calcTime() {
    var hours = this.distance / this.averSreed; // console.log(hours);

    if (hours >= 4) {
      console.log(hours + 1);
    } else if (hours >= 9) {
      console.log(hours + 2);
    }
  }
};
car.addDriver('Dominic');
console.log(car.checkDriver('Brian'));
car.showInfo();
car.distance = 2000;
car.consumption();
car.calcTime(); //normal
// Объект, представляющий время

var Time = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  // Функция для вывода времени на экран
  displayTime: function displayTime() {
    var hoursStr = String(this.hours).padStart(2, "0");
    var minutesStr = String(this.minutes).padStart(2, "0");
    var secondsStr = String(this.seconds).padStart(2, "0");
    console.log("".concat(hoursStr, ":").concat(minutesStr, ":").concat(secondsStr));
  },
  // Функция для изменения времени на переданное количество секунд
  addSeconds: function addSeconds(seconds) {
    var totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds + seconds;
    this.hours = Math.floor(totalSeconds / 3600) % 24;
    var remainingSeconds = totalSeconds % 3600;
    this.minutes = Math.floor(remainingSeconds / 60);
    this.seconds = remainingSeconds % 60;
  },
  // Функция для изменения времени на переданное количество минут
  addMinutes: function addMinutes(minutes) {
    this.addSeconds(minutes * 60);
  },
  // Функция для изменения времени на переданное количество часов
  addHours: function addHours(hours) {
    this.addSeconds(hours * 3600);
  }
}; // Пример использования объекта и функций

var currentTime = Object.create(Time);
currentTime.hours = 20;
currentTime.minutes = 59;
currentTime.seconds = 45;
currentTime.displayTime(); // Выведет "20:59:45"

currentTime.addSeconds(30);
currentTime.displayTime(); // Выведет "21:00:15"

currentTime.addMinutes(75);
currentTime.displayTime(); // Выведет "22:15:15"

currentTime.addHours(2);
currentTime.displayTime(); // Выведет "00:15:15" (следующий день)
// const time = {
//   hours: 0,
//   minute: 0,
//   seconds: 0,
// }
// function enterTime() {  
//   let now = new Date();
//   console.log( now );
// }
// function calcTimeSec() {
//   let date = new Date();
//   date.setSeconds(date.getSeconds() + 300);
//   alert( date );
// }
// function calcTimeMin() {
//   let date = new Date();
//   date.setMinutes(date.getMinutes() + 300);
//   alert( date );
// }
// function calcTimeHours() {
//   let date = new Date();
//   date.setHours(date.getHours() + 300);
//   alert( date );
// }
//max
// Объект, представляющий обычную дробь

var Fraction = {
  numerator: 0,
  // Числитель
  denominator: 1,
  // Знаменатель
  // Метод для создания новой дроби
  create: function create(numerator, denominator) {
    var fraction = Object.create(this);
    fraction.numerator = numerator;
    fraction.denominator = denominator;
    return fraction;
  },
  // Метод для сложения двух дробей
  add: function add(otherFraction) {
    var commonDenominator = this.denominator * otherFraction.denominator;
    var newNumerator = this.numerator * otherFraction.denominator + otherFraction.numerator * this.denominator;
    return Fraction.create(newNumerator, commonDenominator);
  },
  // Метод для вычитания двух дробей
  subtract: function subtract(otherFraction) {
    var commonDenominator = this.denominator * otherFraction.denominator;
    var newNumerator = this.numerator * otherFraction.denominator - otherFraction.numerator * this.denominator;
    return Fraction.create(newNumerator, commonDenominator);
  },
  // Метод для умножения двух дробей
  multiply: function multiply(otherFraction) {
    var newNumerator = this.numerator * otherFraction.numerator;
    var newDenominator = this.denominator * otherFraction.denominator;
    return Fraction.create(newNumerator, newDenominator);
  },
  // Метод для деления двух дробей
  divide: function divide(otherFraction) {
    var newNumerator = this.numerator * otherFraction.denominator;
    var newDenominator = this.denominator * otherFraction.numerator;
    return Fraction.create(newNumerator, newDenominator);
  },
  // Метод для сокращения дроби
  reduce: function reduce() {
    var gcd = this.gcd(this.numerator, this.denominator);
    return Fraction.create(this.numerator / gcd, this.denominator / gcd);
  },
  // Метод для нахождения наибольшего общего делителя (Алгоритм Евклида)
  gcd: function gcd(a, b) {
    if (b === 0) {
      return a;
    } else {
      return this.gcd(b, a % b);
    }
  },
  // Метод для представления дроби в виде строки
  toString: function toString() {
    return "".concat(this.numerator, "/").concat(this.denominator);
  }
}; // Пример использования объектов и методов

var fraction1 = Fraction.create(1, 2);
var fraction2 = Fraction.create(3, 4);
var sum = fraction1.add(fraction2);
console.log("Додвання:", sum.toString()); // Выведет "Сумма: 5/4"

var difference = fraction1.subtract(fraction2);
console.log("Віднімання:", difference.toString()); // Выведет "Разность: -1/4"

var product = fraction1.multiply(fraction2);
console.log("Множення:", product.toString()); // Выведет "Произведение: 3/8"

var quotient = fraction1.divide(fraction2);
console.log("Ділення:", quotient.toString()); // Выведет "Частное: 2/3"

var reducedFraction = fraction1.reduce();
console.log("Скрочений дріб:", reducedFraction.toString()); // Выведет "Сокращенная дробь: 1/2"