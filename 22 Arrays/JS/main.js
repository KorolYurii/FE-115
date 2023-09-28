// Easy

const shoppingList = [
  {
    name: "banana",
    price: 8,
    quantity: 200,  
    bought: true, 
    sum: 24, 
  },
  {
    name: "cucumber",    
    price: 4,
    quantity: 100, 
    bought: false,
    sum: 20,   
  },
  {
    name: "pear",    
    price: 18,
    quantity: 20, 
    bought: false,
    sum: 0,   
  },
  {
    name: "apple",    
    price: 18,
    quantity: 2,   
    bought: true,
    sum: 18,
  },
  {
    name: "potato",    
    price: 2,
    quantity: 2000,
    bought: true,
    sum: 24, 
  },
  {
    name: "coconut",    
    price: 80,
    quantity: 10,   
    bought: false,
    sum: 400, 
  },
  
];
const userCart = []

 function availability() {
  console.log('Список покупок:');
    const goodsAvailable = shoppingList.sort((a, b) => a.bought - b.bought);
 goodsAvailable.forEach(el => {
    console.log(`${el.name} (${el.quantity} од.) ${el.bought ? `придбали` : `не придбали`}`);
 })
  
 }
 function productPurchase() {
  const name = prompt(`enter product`)
  const el = shoppingList.find(el => el.name === name)
  if (el) {
    el.bought = true;
    console.log(`${name} придбаний` ); 
  }
  else{
    console.log(`${name} не придбний`);
  }
 }
 
 //productPurchase('coconut')
// NORMAL

function deleteProd(name) {
  const shoppingListDel = shoppingList.filter(el => {
    return el.name !== name
  })
  
  console.log(shoppingListDel);
}
console.log(deleteProd('pear'));



function addPurchase(namE, quantity, pricE) {
  const userList = shoppingList.find(el => el.name === namE);

  if (userList) {
    userList.quantity += quantity;
    userList.sum = userList.quantity * userList.price;
      console.log(`${namE} оновлено. Нова кількість: ${userList.quantity}`);
  } else {
      const newItem = {
          name: namE,
          price: pricE,
          quantity: quantity,
          bought: true,          
          sum: quantity * pricE
      };
      shoppingList.push(newItem);
      console.log(`${namE} доданий до сиску`);
  }
}
addPurchase("cherry", 1, 10); 
addPurchase("apricot", 2, 12); 

console.log("оновлений список");
console.log(shoppingList);

// MAX


function getAmountOfProduct(){
  const amount = shoppingList.reduce((acc,el)=>{
    acc=(el.quantity*el.price)+acc
    return acc
  },0)
  return amount
  
}
function getAmountOfUnpurchased() {
  const notBuyFalse = shoppingList.filter(el => !el.bought)
  const notBuy = notBuyFalse.reduce((acc,el)=>{
    acc= ((el.quantity*el.price))+acc
    return acc
  },0)
  return notBuy
}



function sortByPrice() {
  const sorted = shoppingList.slice()
  sorted.sort((a, b) => {
    return  b.sum - a.sum    
  })
  console.log(sorted);

}