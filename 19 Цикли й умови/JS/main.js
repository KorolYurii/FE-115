//NORMAL
//1
function polydrome() {
    let polydrome = prompt(`enter a five-digit number`);
    let a = parseInt(polydrome/10000).toString();
    let b = parseInt(polydrome%10000/1000).toString();
    // let c = parseInt(polydrome%1000/100).toString();
    let d = parseInt(polydrome%100/10).toString();
    let e = parseInt(polydrome%10).toString();    
    
    if ((a==e) && (b==d)) {
        console.log('its polydrome');
    }
    else{
        console.log('its not polydrome');
    }
    
}
//2
function price() {
    let money = prompt(`enter your price`)
    if (money >= 200) {
        console.log( money - (money * 0.03)); 
} else if (money > 300) {
    console.log( money - (money * 0.05));
} else if (money > 500){
    console.log( money - (money * 0.07));
}  else {    
    console.log('акція обійшла вас стороною');
    }


}

//3
function numbers() {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    let evenCount = 0;
    let oddCount = 0;
   
    for (let i = 0; i < 10; i++) {
      let input = parseFloat(prompt(`Введіть число ${i + 1}:`));       
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
        confirm(`Ви ввели не число. Спробуйте ще раз.`);
        i--; 
      }
    }
    
    console.log(`positive: ${positiveCount}`);
    console.log(`negative: ${negativeCount}`);
    console.log(`zero: ${zeroCount}`);
    console.log(`event: ${evenCount}`);
    console.log(`odd: ${oddCount}`);
}

//4
function week() {
    const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    let currentIndex = -1;

    while (true) {
        const userInput = prompt("Введіть день тижня");
        const currentDay = getNextDay();

        if (userInput === null) {
            
            break;
        }

        if (userInput.toLowerCase() === currentDay.toLowerCase()) {
            alert("Наступний день тижня: " + getNextDay());
        } else {
            alert("Введіть правильний день тижня " + currentDay);
        }
    }

function getNextDay() {
    currentIndex = (currentIndex + 1) % daysOfWeek.length;
    return daysOfWeek[currentIndex];
}
  
        // let day= prompt(`write the day of the week`);
        
        // const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']; 
        // let currentIndex = -1

        // function getNextDay() {
        //     currentIndex = (currentIndex + 1) % daysOfWeek.length;
        //     return daysOfWeek[currentIndex];
        // }
        // const index = daysOfWeek.indexOf(day);

        //     if (index !== -1) {
        //         // Если введенный день найден, выводим следующий день
        //         const nextIndex = (index + 1) % daysOfWeek.length;
        //         prompt(`Следующий день недели ${+ daysOfWeek[nextIndex]} `);;
        //     } else {
        //         prompt(`Неверный день недели: ${+ currentDay}`);
                
        //     }
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
    
  
}

// MAX
//1
    const min = 0;
    const max = 100;
function game(from, to)  {
    
    const mid = parseInt(((to - from) / 2) + from); 
    const searchNumberUser =  confirm(`your number is ${mid}?`);       

    if (searchNumberUser) {
        console.log( `Good game`);
        return false;
    }  else {
        const isLarger = confirm(`Your number is larger than ${mid}?`)

        isLarger ? game(mid, to) : game(from, mid)
    }
    
   
}
game(min, max)

  
    
//2
function table() {
    for (let i = 2; i < 10; i++) {
        for (let x = 1; x < 10; x++) {
           console.log(i, x, x*i);           
        }        
    }
}
//3
function calcDate() {
    const yourDate = prompt(`enter your date`)
    const dateArray = yourDate.split('.')
    console.log(dateArray);
    const day = +dateArray[0];
    const month = +dateArray[1];
    const year = +dateArray[2];
    if(isNaN(day) || isNaN(month) || isNaN(year)) return false
    let nextDay = day + 1;
    let nextMonth = month;
    let nextYear = year;
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
                nextMonth++
            }
            break;
        case 2:
            if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
                if (day === 29) {
                    nextDay = 1;
                    nextMonth++;
                }  
            } else{
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
    const addZero = n => n < 10 ? `0${n}` : n;
    console.log(`Next date - ${ addZero(nextDay)}.${addZero(nextMonth)}.${addZero(nextYear)}`);


    // let date = new Date(yourDate);
    // date.setDate(date.getDate() + 1);
    
    // alert( date );
}