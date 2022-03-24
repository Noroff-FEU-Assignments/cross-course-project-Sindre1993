const cartBag = document.getElementById("cart-bag");

let shoppingCartItems = JSON.parse(localStorage.getItem("shoppingCart"));

let total = 0;
if (!shoppingCartItems) {
  const emptyCart = document.createElement("p");

  emptyCart.innerHTML = "Your shoppingcart is empty";

  cartBag.appendChild(emptyCart);
} else {
  for (let i = 0; i < shoppingCartItems.length; i++) {
    const item = shoppingCartItems[i];

    const itemElement = document.createElement("div");
    itemElement.innerHTML = `
                  <div>
                  <img class="cart-image" src="${item.imageFront}"</img>
                  </div>
                  <div>
                  <p>Price: $${parseFloat(item.price)}</p>
                  <p>${item.brand}, ${item.name}</p>
                  <p>Size: ${item.size}</p>
                  </div>
                  `;
    itemElement.className = "price-wrap";
    cartBag.appendChild(itemElement);
    if (i + 1 < shoppingCartItems.length) {
      cartBag.appendChild(document.createElement("hr"));
    }

    const itemPrice = parseFloat(item.price); // "$149 USD" -> 149
    console.log("price", itemPrice);
    total = total + itemPrice;
  }
}

const totalPrice = document.getElementById("totalPrice");
const totalValue = document.getElementById("totalValue");

totalPrice.innerHTML = `$${total}`;
totalValue.innerHTML = `$${total}`;
