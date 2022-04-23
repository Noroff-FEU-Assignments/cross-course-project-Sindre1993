const baseUrl = "https://flowersolarpower.site/rainydays/wp-json/wc/store/products";
const container = document.querySelector(".jacket-row");

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();
  console.log(products);
  products.forEach(function (product) {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.innerHTML = `
    <img src="${product.images[0].src}" alt="" class="product__image" /> 
            <div class="product-center">
              <h3 class="product__name">${product.name}</h3>
              <p class="product__price">NOK: ${product.prices.price},-</p>
            </div>
                    `;
    productElement.addEventListener("click", () => handleProductOnClick(product.id));
    container.appendChild(productElement);
  });
}

function handleProductOnClick(id) {
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set("id", id);
  window.location = `/male-product.html?${urlParams}`;
}

getProducts(baseUrl);
