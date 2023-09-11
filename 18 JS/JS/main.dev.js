"use strict";

//1
function addition() {
  var a = 0.1;
  var b = 0.2;
  var addition = alert((a * 10 + b * 10) / 10);
}

function addition2() {
  var a = 0.1;
  var b = 0.2;
  var addition = alert((a + b).toFixed(1));
}

function sum() {
  var a = "1";
  var b = 2;
  var sum = alert(+a + b);
}

function fractionGB() {
  var a = 820;
  var b = 1024;
  var fraction = prompt('Volume USB (maxGB)');
  console.log(Math.floor(fraction * b / a));
} //2


function chocolate() {
  var price = prompt('price of chocolate');
  var cash = prompt('your cash');
  var number = Math.floor(cash / price);

  if (!isNaN(price)) {
    if (!isNaN(cash)) {
      console.log(Math.floor(cash / price));
      console.log(cash - number * price);
    } else {
      console.log('Add valid cash');
    }
  } else {
    console.log('Add valid price');
  }
}

function numeric() {
  var number = prompt('enter a three-digit number');
  var a = parseInt(number / 100).toString();
  var b = parseInt(number % 100 / 10).toString();
  var c = parseInt(number % 10).toString();
  console.log(parseInt(c + b + a));
} //3


function bank() {
  var money = prompt('your money');
  var load = 2;

  if (!isNaN(money)) {
    console.log(money / 100 * 5 / 12 * load);
  } else {
    console.log('Add valid money');
  }
}