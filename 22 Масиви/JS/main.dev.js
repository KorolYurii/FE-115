"use strict";

// Easy
var shoppingList = [{
  name: "banana",
  price: 8,
  quantity: 200,
  bought: true,
  sum: 24
}, {
  name: "cucumber",
  price: 4,
  quantity: 100,
  bought: false,
  sum: 20
}, {
  name: "pear",
  price: 18,
  quantity: 20,
  bought: false,
  sum: 0
}, {
  name: "apple",
  price: 18,
  quantity: 2,
  bought: true,
  sum: 18
}, {
  name: "potato",
  price: 2,
  quantity: 2000,
  bought: true,
  sum: 24
}, {
  name: "coconut",
  price: 80,
  quantity: 10,
  bought: false,
  sum: 400
}];
var userCart = [];

function availability() {
  console.log('Список покупок:');
  var goodsAvailable = shoppingList.sort(function (a, b) {
    return a.bought - b.bought;
  });
  goodsAvailable.forEach(function (el) {
    console.log("".concat(el.name, " (").concat(el.quantity, " \u043E\u0434.) ").concat(el.bought ? "\u043F\u0440\u0438\u0434\u0431\u0430\u043B\u0438" : "\u043D\u0435 \u043F\u0440\u0438\u0434\u0431\u0430\u043B\u0438"));
  });
}

function productPurchase() {
  var name = prompt("enter product");
  var el = shoppingList.find(function (el) {
    return el.name === name;
  });

  if (el) {
    el.bought = true;
    console.log("".concat(name, " \u043F\u0440\u0438\u0434\u0431\u0430\u043D\u0438\u0439"));
  } else {
    console.log("".concat(name, " \u043D\u0435 \u043F\u0440\u0438\u0434\u0431\u043D\u0438\u0439"));
  }
} //productPurchase('coconut')
// NORMAL


function deleteProd(name) {
  var shoppingListDel = shoppingList.filter(function (el) {
    return el.name !== name;
  });
  console.log(shoppingListDel);
}

console.log(deleteProd('pear'));

function addPurchase(namE, quantity, pricE) {
  var userList = shoppingList.find(function (el) {
    return el.name === namE;
  });

  if (userList) {
    userList.quantity += quantity;
    userList.sum = userList.quantity * userList.price;
    console.log("".concat(namE, " \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043E. \u041D\u043E\u0432\u0430 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C: ").concat(userList.quantity));
  } else {
    var newItem = {
      name: namE,
      price: pricE,
      quantity: quantity,
      bought: true,
      sum: quantity * pricE
    };
    shoppingList.push(newItem);
    console.log("".concat(namE, " \u0434\u043E\u0434\u0430\u043D\u0438\u0439 \u0434\u043E \u0441\u0438\u0441\u043A\u0443"));
  }
}

addPurchase("cherry", 1, 10);
addPurchase("apricot", 2, 12);
console.log("оновлений список");
console.log(shoppingList); // MAX

function getAmountOfProduct() {
  var amount = shoppingList.reduce(function (acc, el) {
    acc = el.quantity * el.price + acc;
    return acc;
  }, 0);
  return amount;
}

function getAmountOfUnpurchased() {
  var notBuyFalse = shoppingList.filter(function (el) {
    return !el.bought;
  });
  var notBuy = notBuyFalse.reduce(function (acc, el) {
    acc = el.quantity * el.price + acc;
    return acc;
  }, 0);
  return notBuy;
}

function sortByPrice() {
  var sorted = shoppingList.slice();
  sorted.sort(function (a, b) {
    return b.sum - a.sum;
  });
  console.log(sorted);
}