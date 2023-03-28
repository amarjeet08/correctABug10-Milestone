function doubleCartQuantity(cart){
  for (let i = 0; i < cart.length; i++){
    cart[i] *= 2;
  }
  return cart;
}
let cart = [2,4,6,8];
console.log(doubleCartQuantity(cart))