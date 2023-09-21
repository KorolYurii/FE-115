//NORMAL
//1
function declaration() {

}
let expression = function () {

}
let arow = (a, b) => {

}

//2
function length(a) {
  console.log(function (a, k, n, h) {}.length);


}

//3
function numbers() {
  const firstNumber = prompt(`введіть число`);
  const secodNumber = prompt(`введіть число`);

  if (firstNumber > secodNumber) {
    console.log(1);
  } else if (firstNumber < secodNumber) {
    console.log(-1);
  } else if (firstNumber === secodNumber) {
    console.log(0);
  } else(valid)

}
//4

function factorial(n) {
  if (n === 0 || n === 1) {
      return 1; 
  } else {
      let result = 1;
      for (let i = 2; i <= n; i++) {
          result *= i;
      }
      return result;
  }
}
const number = 6; 
const result = factorial(number);
console.log(`${result}`);



//5
function threeNumers(a, b, c) {
  function combineDigits(num1, num2, num3) {
    if (num1 >= 0 && num1 <= 9 && 
      num2 >= 0 && num2 <= 9 &&
      num3 >= 0 && num3 <= 9) {
        return num1 * 100 + num2 * 10 + num3;
    } else {
        return "error, enter 0 - 9";
    }
}
const result = combineDigits(2, 3, 4);
console.log(`${result}`);
   
}

//6
function square(a, b = a) {
  return a * b;
}
console.log(square(10, 20));

// NORMAL
//1
function perfect(number) {
  let totalDivider = 0;

  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      totalDivider = totalDivider + i

    }

  }
  return number === totalDivider
}

function showResult() {
  let userNumber = parseInt(prompt(`введіть число`));
  console.log(perfect(userNumber) ? `number is perfect` : `number is not perfect`);
}
//2
function perfectInRange() {
  let min = parseInt(prompt(`enter min`))
  let max = parseInt(prompt(`enter max`))
  let result = ' '
  for (let i = min; i <= max; i++) {
    if (perfect(i)) {
      result += i + ' '
    }
  }
  alert(`${result} are perfect`)
}