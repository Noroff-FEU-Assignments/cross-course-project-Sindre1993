const addToCartButton = document.getElementById("cartCTA");

function addToCart() {
  const product = {
    brand: document.querySelector("#productBrand").textContent,
    name: document.querySelector("#productName").textContent,
    price: document.querySelector("#productPrice").textContent,
    imageFront: document.querySelector("#imageFront").src,
    imageBack: document.querySelector("#imageBack").src,
    size: document.querySelector("#productSize").value,
  };
  let shoppingCartItems = JSON.parse(localStorage.getItem("shoppingCart"));
  if (!shoppingCartItems) {
    shoppingCartItems = [];
  }
  shoppingCartItems.push(product);
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCartItems));

  addToCartButton.innerHTML = "Added!";
  addToCartButton.disabled = true;
}

addToCartButton.onclick = addToCart;
