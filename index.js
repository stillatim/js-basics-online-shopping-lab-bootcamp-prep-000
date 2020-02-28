var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

var object = {
  itemName: `${item}`,
  itemPrice: Math.floor(Math.random() * (100)) + 1  
  }
 cart.push(object);
 return `${item} has been added to your cart.` 
}


function viewCart() {
  if (cart.length < 1) {
    return('Your shopping cart is empty.')
  } else {
  for (let i = 0; i < cart.length; i++) {
     if (i === 1) {
       return(`In your cart, you have ${item} at $${itemPrice}.`)
    } else {
      return(`In your cart, you have ${item} at $${itemPrice}.`)
    }
     } 
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
