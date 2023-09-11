//1
function addition(){
    const a = 0.1;
    const b = 0.2;
    const addition = alert (((a * 10) + (b * 10)) / 10);
}
function addition2(){
    const a = 0.1;
    const b = 0.2;
    const addition = alert ((a + b).toFixed(1));
}

function sum(){
    const a = "1";
    const b = 2;
    const sum = alert (+a + b);
}

function fractionGB(){
    const a = 820;
    const b = 1024;
    const fraction = prompt('Volume USB (maxGB)') ;
    console.log (Math.floor((fraction * b) / a));
}
//2
function chocolate(){
    const price = prompt('price of chocolate');
    const cash = prompt('your cash');
    const number = (Math.floor(cash / price));
    if(!isNaN(price)){
        if(!isNaN(cash)){
        console.log(Math.floor(cash / price));
        console.log(cash - (number * price));
        }
        else{
            console.log('Add valid cash');
        }
    }
    else{
    console.log('Add valid price');
    }
}
function numeric(){
    const number = prompt('enter a three-digit number');
    const a = parseInt(number/100).toString();
    const b = parseInt(number%100/10).toString();
    const c = parseInt(number%10).toString();
    console.log(parseInt( c + b + a ));
    
    
}
//3
function bank(){
    const money = prompt('your money');
    const load = 2;
    if(!isNaN(money)){
        console.log(((money / 100 * 5) / 12) * load);
    }
    
    else{
        console.log('Add valid money');
    }
}