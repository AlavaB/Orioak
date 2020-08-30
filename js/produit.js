let pageUrl = window.location.href;
let url = new URL(pageUrl);
let id = url.searchParams.get("id");
let apiUrl = apiAdress + id;

let selectVarnish = document.getElementById("varnish");
let selectQuantity = document.getElementById("quantity");
let createImage = document.getElementById("product-image");
let createTitle = document.getElementById("title-product");
let createPrice = document.getElementById("price-product");

function item(response) {

    createImage.style.backgroundImage = "url(" + response.imageUrl + ")";
    createTitle.textContent = response.name;
    createPrice.textContent = (response.price / 100);

    let descriptionCol = document.getElementById("description");
    descriptionCol.textContent = response.description;

    for (let index = 0; index < response.varnish.length; index++) {
        const element = response.varnish[index];
        let createOptions = document.createElement("option");
        createOptions.textContent = element;
        selectVarnish.appendChild(createOptions);
    }
};

requestApi(item, apiUrl);

let addToCart = document.getElementById("add-to-cart");
addToCart.addEventListener("click", function () {
    let product = { varnish: selectVarnish.value, quantity: selectQuantity.value, image: createImage.style.backgroundImage, name: createTitle.textContent, price: createPrice.textContent };
    if (localStorage.getItem("cart")) {
        let cartArray = JSON.parse(localStorage.getItem("cart"));
        cartArray.push(product);
        localStorage.setItem("cart", JSON.stringify(cartArray));
    } else {
        let cartArray = [];
        cartArray.push(product);
        localStorage.setItem("cart", JSON.stringify(cartArray));
    }
});