const checkoutBag = document.getElementById("checkoutBag");
const checkoutPrice = document.getElementById("checkout-price");
let shoppingCartItems = JSON.parse(localStorage.getItem("shoppingCart"));

let total = 0;
if (!shoppingCartItems) {
  const checkoutBag = document.createElement("p");

  checkoutBag.innerHTML = "Your shoppingcart is empty";

  checkoutBag.appendChild(emptyCart);
} else {
  for (let i = 0; i < shoppingCartItems.length; i++) {
    const item = shoppingCartItems[i];

    const itemElement = document.createElement("div");
    itemElement.innerHTML = `
                    <div>
                    <p>Price: $${parseFloat(item.price)}</p>
                    <p>${item.brand}, ${item.name}</p>
                    <p>Size: ${item.size}</p>
                    </div>
                    `;
    itemElement.className = "price-wrap";
    checkoutBag.appendChild(itemElement);
    if (i + 1 < shoppingCartItems.length) {
      checkoutBag.appendChild(document.createElement("hr"));
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
