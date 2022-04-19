const baseUrl = "https://flowersolarpower.site/rainydays/wp-json/wc/store/products";

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();
  console.log(products);
}

getProducts(baseUrl);
