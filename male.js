const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get("id");
let product;

const baseUrl = `https://flowersolarpower.site/rainydays/wp-json/wc/store/products/${productId}`;

async function getProductDetails(url) {
  // Make a request to the baseUrl wordpress api
  // Then save the product that we get as a response to the 'product' variable
  const response = await fetch(url);
  let product = await response.json();
  document.querySelector("#productBrand").innerHTML = product.name;
  document.querySelector(".male-top-specific-text").innerHTML = "Home - Jackets & Coats" + " " + "-" + " " + product.name;
  document.querySelector("#productPrice").innerHTML = `NOK: ${product.prices.price},-`;
  document.querySelector("#imageFront").src = product.images[0].src;
  document.querySelector("#imageBack").src = product.images[1].src;
  document.querySelector(".productDescription").innerHTML = product.short_description;
  document.querySelector(".productSpecifications").innerHTML = product.description;
}

getProductDetails(baseUrl);
