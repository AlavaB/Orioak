let pageUrl = window.location.href;
let url = new URL(pageUrl);
let id = url.searchParams.get("id");
let apiUrl = apiAdress + id;


function item(response) {

    let selectVarnish = document.getElementById("varnish");

    let createImage = document.getElementById("product-image");
    createImage.style.backgroundImage = "url(" + response.imageUrl + ")";

    let createTitle = document.getElementById("title-product");
    createTitle.textContent = response.name;

    let createPrice = document.getElementById("price-product");
    createPrice.textContent = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(response.price / 100);

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
addToCart.addEventListener("click", function() {
    localStorage.setItem(cart, [cartArray]);
});