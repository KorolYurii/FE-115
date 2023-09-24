// Easy
const car = {
  brand: 'AUDI',
  year: 2018,
  averSreed: 250,
  drivers: [
    'Brian'
  ],
  fuel: 8,
  distance: 400,
  showInfo() {
    for (const key in car) {
      if (typeof car[key] !== 'function') {
        console.log(`Value of ${key} is ${car[key]}`);
      }
    }
  },
  addDriver(driverName) {
    this.drivers.push(driverName)
  },
  checkDriver(driverName) {
    return this.drivers.includes(driverName)
  },

  consumption() {
    const fix = (this.distance / 100) * this.fuel
    console.log(fix);
  },

  calcTime() {
    let hours = this.distance / this.averSreed
    // console.log(hours);
       
    if (hours >= 4) {
      console.log(hours + 1);
       
    }else if (hours >= 9) {
      console.log(hours + 2);
    } 
    
  }


}
car.addDriver('Dominic')
console.log(car.checkDriver('Brian'));
car.showInfo()
car.distance = 2000
car.consumption()
car.calcTime()

//normal
// Объект, представляющий время
const Time = {
  hours: 0,
  minutes: 0,
  seconds: 0,

  // Функция для вывода времени на экран
  displayTime: function() {
      const hoursStr = String(this.hours).padStart(2, "0");
      const minutesStr = String(this.minutes).padStart(2, "0");
      const secondsStr = String(this.seconds).padStart(2, "0");
      console.log(`${hoursStr}:${minutesStr}:${secondsStr}`);
  },

  // Функция для изменения времени на переданное количество секунд
  addSeconds: function(seconds) {
      const totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds + seconds;
      this.hours = Math.floor(totalSeconds / 3600) % 24;
      const remainingSeconds = totalSeconds % 3600;
      this.minutes = Math.floor(remainingSeconds / 60);
      this.seconds = remainingSeconds % 60;
  },

  // Функция для изменения времени на переданное количество минут
  addMinutes: function(minutes) {
      this.addSeconds(minutes * 60);
  },

  // Функция для изменения времени на переданное количество часов
  addHours: function(hours) {
      this.addSeconds(hours * 3600);
  }
};

// Пример использования объекта и функций
const currentTime = Object.create(Time);
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
const Fraction = {
  numerator: 0,   // Числитель
  denominator: 1, // Знаменатель

  // Метод для создания новой дроби
  create: function(numerator, denominator) {
      const fraction = Object.create(this);
      fraction.numerator = numerator;
      fraction.denominator = denominator;
      return fraction;
  },

  // Метод для сложения двух дробей
  add: function(otherFraction) {
      const commonDenominator = this.denominator * otherFraction.denominator;
      const newNumerator = this.numerator * otherFraction.denominator + otherFraction.numerator * this.denominator;
      return Fraction.create(newNumerator, commonDenominator);
  },

  // Метод для вычитания двух дробей
  subtract: function(otherFraction) {
      const commonDenominator = this.denominator * otherFraction.denominator;
      const newNumerator = this.numerator * otherFraction.denominator - otherFraction.numerator * this.denominator;
      return Fraction.create(newNumerator, commonDenominator);
  },

  // Метод для умножения двух дробей
  multiply: function(otherFraction) {
      const newNumerator = this.numerator * otherFraction.numerator;
      const newDenominator = this.denominator * otherFraction.denominator;
      return Fraction.create(newNumerator, newDenominator);
  },

  // Метод для деления двух дробей
  divide: function(otherFraction) {
      const newNumerator = this.numerator * otherFraction.denominator;
      const newDenominator = this.denominator * otherFraction.numerator;
      return Fraction.create(newNumerator, newDenominator);
  },

  // Метод для сокращения дроби
  reduce: function() {
      const gcd = this.gcd(this.numerator, this.denominator);
      return Fraction.create(this.numerator / gcd, this.denominator / gcd);
  },

  // Метод для нахождения наибольшего общего делителя (Алгоритм Евклида)
  gcd: function(a, b) {
      if (b === 0) {
          return a;
      } else {
          return this.gcd(b, a % b);
      }
  },

  // Метод для представления дроби в виде строки
  toString: function() {
      return `${this.numerator}/${this.denominator}`;
  }
};

// Пример использования объектов и методов
const fraction1 = Fraction.create(1, 2);
const fraction2 = Fraction.create(3, 4);

const sum = fraction1.add(fraction2);
console.log("Додвання:", sum.toString()); // Выведет "Сумма: 5/4"

const difference = fraction1.subtract(fraction2);
console.log("Віднімання:", difference.toString()); // Выведет "Разность: -1/4"

const product = fraction1.multiply(fraction2);
console.log("Множення:", product.toString()); // Выведет "Произведение: 3/8"

const quotient = fraction1.divide(fraction2);
console.log("Ділення:", quotient.toString()); // Выведет "Частное: 2/3"

const reducedFraction = fraction1.reduce();
console.log("Скрочений дріб:", reducedFraction.toString()); // Выведет "Сокращенная дробь: 1/2"
