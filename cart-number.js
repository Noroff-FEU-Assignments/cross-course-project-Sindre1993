export function createCart() {
  const cart = localStorage.getItem("shoppingCart");
  if (!cart) {
    return [];
  } else {
    return JSON.parse(cart);
  }
}

createCart();

function cartItemsLength() {
  const cartIcon = document.getElementsByClassName("cart-icon__number");

  cartIcon.innerHTML = JSON.parse(localStorage.shoppingCart).length;
}

cartItemsLength();
