import { createCart } from "./cart-number.js";

const cartBag = document.getElementById("cart-bag");
const removeItem = document.getElementsByClassName("removeItem");
const priceWrap = document.getElementsByClassName("cart-price");

let shoppingCartItems = JSON.parse(localStorage.getItem("shoppingCart"));

createCart();

let total = 0;
if (!shoppingCartItems) {
  const emptyCart = document.createElement("p");
  emptyCart.setAttribute("class", "emptyCart");
  emptyCart.innerHTML = "Your shopping cart is empty :(";

  cartBag.appendChild(emptyCart);
} else {
  for (let i = 0; i < shoppingCartItems.length; i++) {
    const item = shoppingCartItems[i];

    const itemElement = document.createElement("div");
    itemElement.innerHTML = `
                  <div class="cart-wrap">
                  <img class="cart-image" src="${item.imageFront}"</img>
                  </div>
                  <div class="cart-row">
                  <p>Price: $${parseFloat(item.price)}</p>
                  <p>${item.brand}, ${item.name}</p>
                  <p>Size: ${item.size}</p>
                  <button class="removeItem" type="button">REMOVE</button>
                  </div>
                  `;
    itemElement.className = "price-wrap";
    cartBag.appendChild(itemElement);
    if (i + 1 < shoppingCartItems.length) {
      cartBag.appendChild(document.createElement("hr"));
    }

    const itemPrice = parseFloat(item.price);
    console.log("price", itemPrice);
    total = total + itemPrice;
  }
}

for (let i = 0; i < removeItem.length; i++) {
  const removeButton = removeItem[i];
  removeButton.addEventListener(`click`, function (removed) {
    const buttonClicked = removed.target;
    buttonClicked.parentElement.parentElement.remove();
  });
}

const totalPrice = document.getElementById("totalPrice");
const totalValue = document.getElementById("totalValue");

totalPrice.innerHTML = `$${total}`;
totalValue.innerHTML = `$${total}`;
