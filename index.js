var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var currentItem = {};
 currentItem.itemName = item;
 currentItem.itemPrice = Math.floor(Math.random()*100);
 cart.push(currentItem);
 return `${currentItem.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var itemString;
  var grammarString = '';
  var fullString = '';
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      itemString = '';
      grammarString = '';
      
      if (i < cart.length && cart.length !==1) {
        grammarString += `, `;
        if (i === cart.length -1) {
          grammarString += `and `
        }
      }
      itemString = grammarString + `${cart[i].itemName} at $${cart[i].itemPrice}`
      fullString += itemString
    }  
    
    return `In your cart, you have ${fullString}.`
  } else {
    return "Your shopping cart is empty."
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
