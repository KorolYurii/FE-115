"use strict";

//NORMAL
//1
function polydrome() {
  var polydrome = prompt("enter a five-digit number");
  var a = parseInt(polydrome / 10000).toString();
  var b = parseInt(polydrome % 10000 / 1000).toString(); // let c = parseInt(polydrome%1000/100).toString();

  var d = parseInt(polydrome % 100 / 10).toString();
  var e = parseInt(polydrome % 10).toString();

  if (a == e && b == d) {
    console.log('its polydrome');
  } else {
    console.log('its not polydrome');
  }
} //2


function price() {
  var money = prompt("enter your price");

  if (money >= 200) {
    console.log(money - money * 0.03);
  } else if (money > 300) {
    console.log(money - money * 0.05);
  } else if (money > 500) {
    console.log(money - money * 0.07);
  } else {
    console.log('акція обійшла вас стороною');
  }
} //3


function numbers() {
  var positiveCount = 0;
  var negativeCount = 0;
  var zeroCount = 0;
  var evenCount = 0;
  var oddCount = 0;

  for (var i = 0; i < 10; i++) {
    var input = parseFloat(prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0447\u0438\u0441\u043B\u043E ".concat(i + 1, ":")));

    if (!isNaN(input)) {
      if (input > 0) {
        positiveCount++;
      } else if (input < 0) {
        negativeCount++;
      } else {
        zeroCount++;
      }

      if (input % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    } else {
      confirm("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435 \u0447\u0438\u0441\u043B\u043E. \u0421\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437.");
      i--;
    }
  }

  console.log("positive: ".concat(positiveCount));
  console.log("negative: ".concat(negativeCount));
  console.log("zero: ".concat(zeroCount));
  console.log("event: ".concat(evenCount));
  console.log("odd: ".concat(oddCount));
} //4


function week() {
  var daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  var currentIndex = -1;

  while (true) {
    var userInput = prompt("Введіть день тижня");
    var currentDay = getNextDay();

    if (userInput === null) {
      break;
    }

    if (userInput.toLowerCase() === currentDay.toLowerCase()) {
      alert("Наступний день тижня: " + getNextDay());
    } else {
      alert("Введіть наступний день тижня " + currentDay);
    }
  }

  function getNextDay() {
    currentIndex = (currentIndex + 1) % daysOfWeek.length;
    return daysOfWeek[currentIndex];
  } // let day= prompt(`write the day of the week`);
  // const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']; 
  // let currentIndex = -1
  // function getNextDay() {
  //     currentIndex = (currentIndex + 1) % daysOfWeek.length;
  //     return daysOfWeek[currentIndex];
  // }
  // const index = daysOfWeek.indexOf(day);
  //     
  // while (confirm(`${days[currDay]}. Do you want to see the next day?`)) {
  //     currDay = (currDay + 1) % days.length;
  // }
  // let sunday = 0
  // let monday = 1
  // let tuesday = 2
  // let wednesday = 3
  // let thursday = 4
  // let friday = 5
  // let saturday = 6

} // MAX
//1


var min = 0;
var max = 100;

function game(from, to) {
  var mid = parseInt((to - from) / 2 + from);
  var searchNumberUser = confirm("your number is ".concat(mid, "?"));

  if (searchNumberUser) {
    console.log("Good game");
    return false;
  } else {
    var isLarger = confirm("Your number is larger than ".concat(mid, "?"));
    isLarger ? game(mid, to) : game(from, mid);
  }
}

game(min, max); //2

function table() {
  for (var i = 2; i < 10; i++) {
    for (var x = 1; x < 10; x++) {
      console.log(i, x, x * i);
    }
  }
} //3


function calcDate() {
  var yourDate = prompt("enter your date");
  var dateArray = yourDate.split('.');
  console.log(dateArray);
  var day = +dateArray[0];
  var month = +dateArray[1];
  var year = +dateArray[2];
  if (isNaN(day) || isNaN(month) || isNaN(year)) return false;
  var nextDay = day + 1;
  var nextMonth = month;
  var nextYear = year;

  switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
      if (day >= 30) {
        nextDay = 1;
        nextMonth++;
      }

      break;

    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (day >= 31) {
        nextDay = 1;
        nextMonth++;
      }

      break;

    case 2:
      if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        if (day === 29) {
          nextDay = 1;
          nextMonth++;
        }
      } else {
        if (day >= 28) {
          nextDay = 1;
          nextMonth++;
        }
      }

      break;
  }

  if (nextMonth > 12) {
    nextMonth = 1;
    nextDay = 1;
    nextYear++;
  }

  var addZero = function addZero(n) {
    return n < 10 ? "0".concat(n) : n;
  };

  console.log("Next date - ".concat(addZero(nextDay), ".").concat(addZero(nextMonth), ".").concat(addZero(nextYear))); // let date = new Date(yourDate);
  // date.setDate(date.getDate() + 1);
  // alert( date );
}