 //1


 // 2
function userFullName(){
    const FIRST_NAME = 'Oleg';
    let lastName = 'Dmytro';
    let _userName = 'Olga';
    let $name = 'Mahmed'; 
    
    // let 1name = 'Denis';
    // let 21+name = 'Denis';
    // let while = 'Denis';
    // let -1=name = 'Denis';
    
    
    const userName = prompt('add your full name');
    
    if (userName && userName.length && userName.length > 1) {
        console.log(`Hello ${userName}`); 
    }
    else {
        console.log(`name is too short`);
    }
}

//3 
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
function yourFirstName(){
    const yourName = prompt('What is your name?');

    if (yourName && yourName.length && yourName.length > 1) {
        console.log(`Hello ${yourName}`); 
    }
    else {
        console.log(`name is too short`);
    }
}


//2
function age(){
    const yourAge = prompt('Your birthday year?');
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear();
    
    if (!isNaN(yourAge)){
        
        if (currentYear < yourAge) {
            console.log( 'error');
        }
        else {
            const userAge = currentYear - yourAge;
            console.log(userAge);
        }
    } 
    else{
        console.log('Add valid year');
    }
}


//3
function sizeSquare(){
    const size = prompt('The length of the side of the square') 
    console.log(size * 4);
}

//1
function circleRadius(){
    const radius = prompt('Enter radius')
    console.log(Math.PI * Math.pow(radius, 2) );
}
//2
function speed(){
    const distance = prompt('Enter your distance (km)');
    const time = prompt('Enter your time (hours)');
    console.log(distance / time);
}
//3
function converter(){
    const cash = prompt('enter your cash(USD)');
    const euro = 0.93;
    console.log(cash * euro);
}
