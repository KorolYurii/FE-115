"use strict";

var allProducts = [{
  name: "banana",
  uniqId: 74638,
  price: 8,
  quantity: 200,
  discount: 0.03,
  isDiscount: true
}, {
  name: "cucumber",
  uniqId: 2334,
  price: 4,
  quantity: 100,
  discount: 0,
  isDiscount: false
}, {
  name: "pear",
  uniqId: 234,
  price: 18,
  quantity: 0,
  discount: 0.5,
  isDiscount: true
}, {
  name: "apple",
  uniqId: 3322,
  price: 18,
  quantity: 2,
  discount: 0.1,
  isDiscount: true
}, {
  name: "potato",
  uniqId: 333,
  price: 2,
  quantity: 2000,
  discount: 0,
  isDiscount: false
}, {
  name: "coconut",
  uniqId: 3498,
  price: 80,
  quantity: 10,
  discount: 0.1,
  isDiscount: true
}];
var userCart = [];

function addToCart(id, quantity) {
  var newProd = allProducts.find(function (el) {
    return el.uniqId === id;
  });

  if (!newProd) {
    console.log("оберіть продукт зі списку наявних, будь ласка");
    return false;
  }

  if (newProd.quantity < quantity) {
    // console.log("Продукт закінчився, вибачте.");
    return false;
  }

  newProd.quantity = quantity;
  userCart.push(newProd);
  newProd.isInCart = true;
}

function setQuantity(quantity, id) {
  var newProd = allProducts.findIndex(function (el) {
    return el.uniqId === id;
  });
  allProducts[newProd].quantity = quantity;
}

addToCart(333, 10);
addToCart(3498, 2);
addToCart(234, 3);

function productRemoving(id) {
  var deleteProduct = userCart.findIndex(el.id === id);
  userCart.splice(deleteProduct, 1);
}

function showCartProducts() {
  var result = userCart.map(function (el) {
    return {
      name: el.name,
      price: el.price
    };
  }); // console.log(result);
}

function showCartsProducts() {
  var result = userCart.map(function (el) {
    console.log(el);
    return {
      name: el.name,
      price: el.price
    };
  });
  console.log(result);
}

showCartProducts();

function getAmountOfProduct() {
  var amount = userCart.reduce(function (acc, el) {
    acc = el.quantity * el.price + acc;
    return acc;
  }, 0);
  return amount;
}

getAmountOfProduct();

function sortByPrice() {
  var sorted = allProducts.slice();
  sorted.sort(function (a, b) {
    return b.quantity - a.quantity;
  });
  console.log(sorted);
}