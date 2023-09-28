"use strict";

//1
// 2
function userFullName() {
  var FIRST_NAME = 'Oleg';
  var lastName = 'Dmytro';
  var _userName = 'Olga';
  var $name = 'Mahmed'; // let 1name = 'Denis';
  // let 21+name = 'Denis';
  // let while = 'Denis';
  // let -1=name = 'Denis';

  var userName = prompt('add your full name');

  if (userName && userName.length && userName.length > 1) {
    console.log("Hello ".concat(userName));
  } else {
    console.log("name is too short");
  }
} //3 
// slash*  

/*const userName = prompt('add your full name');

if (userName && userName.length && userName.length > 1) {
    console.log(`Hello ${userName}`); 
}
else {
    console.log(`name is too short`);
}*/
//ctrl+slash
// const userName = prompt('add your full name');
// if (userName && userName.length && userName.length > 1) {
//     console.log(`Hello ${userName}`); 
// }
// else {
//     console.log(`name is too short`);
// }
//2*slash
//4
//camelCase
// (kebab-case, screaming_snake)
//NORMAL
// 1


function yourFirstName() {
  var yourName = prompt('What is your name?');

  if (yourName && yourName.length && yourName.length > 1) {
    console.log("Hello ".concat(yourName));
  } else {
    console.log("name is too short");
  }
} //2


function age() {
  var yourAge = prompt('Your birthday year?');
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();

  if (!isNaN(yourAge)) {
    if (currentYear < yourAge) {
      console.log('error');
    } else {
      var userAge = currentYear - yourAge;
      console.log(userAge);
    }
  } else {
    console.log('Add valid year');
  }
} //3


function sizeSquare() {
  var size = prompt('The length of the side of the square');
  console.log(size * 4);
} //1


function circleRadius() {
  var radius = prompt('Enter radius');
  console.log(Math.PI * Math.pow(radius, 2));
} //2


function speed() {
  var distance = prompt('Enter your distance (km)');
  var time = prompt('Enter your time (hours)');
  console.log(distance / time);
} //3


function converter() {
  var cash = prompt('enter your cash(USD)');
  var euro = 0.93;
  console.log(cash * euro);
}