// Easy
const car = {
  brand: 'AUDI',
  year: 2018,
  averSreed: 250,
  drivers: [
    'Victor'
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
    const fixFuel = (this.distance / 100) * this.fuel
    console.log(`всього потрібно ${fixFuel}л. пального`);
  },

  calcTime() {
    let hours = this.distance / this.averSreed
    if (hours >= 12) {
      console.log(`час за який ви подолаєте відстань буде: ${hours + 3} год.`);      
    }else if (hours >= 8) {
      console.log(`час за який ви подолаєте відстань буде: ${hours + 2} год.`);
    }else if (hours >= 4) {
      console.log(`час за який ви подолаєте відстань буде: ${hours + 1} год.`);
       
    } 
    
  }
  
}



car.addDriver('Dima')
console.log(car.checkDriver('Victor'));
car.showInfo()
car.distance = 3000
car.consumption()
car.calcTime()

//normal
const time = {
  hours: 0,
  minutes: 0,
  seconds: 0,

  
  displayTime: function() {
      const hoursStr = this.hours < 10 ? "0" + this.hours : this.hours.toString();
      const minutesStr = this.minutes < 10 ? "0" + this.minutes : this.minutes.toString();
      const secondsStr = this.seconds < 10 ? "0" + this.seconds : this.seconds.toString();
      console.log(`${hoursStr}:${minutesStr}:${secondsStr}`);
  },
  
  addSeconds: function(seconds) {
      const totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds + seconds;
      this.hours = Math.floor(totalSeconds / 3600) % 24;
      const remainingSeconds = totalSeconds % 3600;
      this.minutes = Math.floor(remainingSeconds / 60);
      this.seconds = remainingSeconds % 60;
  },

  addMinutes: function(minutes) {
      this.addSeconds(minutes * 60);
  },
 
  addHours: function(hours) {
      this.addSeconds(hours * 3600);
  }
};


const currentTime = Object.create(time);
// currentTime.hours = 20;
// currentTime.minutes = 59;
// currentTime.seconds = 45;

currentTime.displayTime(); 

currentTime.addSeconds(101);
currentTime.displayTime(); 

currentTime.addMinutes(250);
currentTime.displayTime(); 

currentTime.addHours(14);
currentTime.displayTime(); 



//max
const fraction = {
nominator: 2,
denominator: 3,
showValue() {
    console.log(`Value is ${this.nominator}/${this.denominator}`);
},
findGCD(a, b) {
    if(a == 0) {
        return b
    }
    return this.findGCD(b % a, a)
},
findLocalNominator(n, d) {
    return n * d
},
add(n, d) {
    let localDenominator = 1;
    if(this.denominator === d) {
        localDenominator = this.denominator
    } else {
        localDenominator = this.denominator * d
        this.nominator = this.nominator * (localDenominator / this.denominator)
        this.denominator = localDenominator;
        n = n * (localDenominator / d);
        d = localDenominator;
        const addingResultNominator = this.nominator + n;
        const gcd = this.findGCD(addingResultNominator, d);
        console.log(`result is ${addingResultNominator / gcd}/${d / gcd}`);
    }
},
subtraction(n, d){
  let localDenominator = 1;
  if (this.denominator === d) {
    localDenominator = this.denominator
  } else{
    localDenominator = this.denominator * d
    this.nominator = this.nominator * (localDenominator / this.denominator)
    this.denominator = localDenominator;
    n = n * (localDenominator / d);
    d = localDenominator;
  }
}
}


