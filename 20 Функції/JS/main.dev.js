"use strict";

//NORMAL
//1
function declaration() {}

var expression = function expression() {};

var arow = function arow(a, b) {}; //2


function length(a) {
  console.log(function (a, k, n, h) {}.length);
} //3


function numbers() {
  var firstNumber = prompt("\u0432\u0432\u0435\u0434\u0456\u0442\u044C \u0447\u0438\u0441\u043B\u043E");
  var secodNumber = prompt("\u0432\u0432\u0435\u0434\u0456\u0442\u044C \u0447\u0438\u0441\u043B\u043E");

  if (firstNumber > secodNumber) {
    console.log(1);
  } else if (firstNumber < secodNumber) {
    console.log(-1);
  } else if (firstNumber === secodNumber) {
    console.log(0);
  } else valid;
} //4


function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    var _result = 1;

    for (var i = 2; i <= n; i++) {
      _result *= i;
    }

    return _result;
  }
}

var number = 6;
var result = factorial(number);
console.log("".concat(result)); //5

function threeNumers(a, b, c) {
  function combineNum(num1, num2, num3) {
    if (num1 >= 0 && num1 <= 9 && num2 >= 0 && num2 <= 9 && num3 >= 0 && num3 <= 9) {
      return num1 * 100 + num2 * 10 + num3;
    } else {
      return "error, enter 0 - 9";
    }
  }

  var result = combineNum(2, 3, 4);
  console.log("".concat(result));
} //6


function square(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : a;
  return a * b;
}

console.log(square(10, 20)); // NORMAL
//1

function perfect(number) {
  var totalDivider = 0;

  for (var i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      totalDivider = totalDivider + i;
    }
  }

  return number === totalDivider;
}

function showResult() {
  var userNumber = parseInt(prompt("\u0432\u0432\u0435\u0434\u0456\u0442\u044C \u0447\u0438\u0441\u043B\u043E"));
  console.log(perfect(userNumber) ? "number is perfect" : "number is not perfect");
} //2


function perfectInRange() {
  var min = parseInt(prompt("enter min"));
  var max = parseInt(prompt("enter max"));
  var result = ' ';

  for (var i = min; i <= max; i++) {
    if (perfect(i)) {
      result += i + ' ';
    }
  }

  alert("".concat(result, " are perfect"));
}