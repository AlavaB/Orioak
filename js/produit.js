//Paramètre de requête de l'URL
let pageUrl = window.location.href;
let url = new URL(pageUrl);
let id = url.searchParams.get("id");
let apiUrl = apiAdress + id;

let selectVarnish = document.getElementById("varnish-product");
let selectQuantity = document.getElementById("quantity");
let createImage = document.getElementById("image-product");
let createTitle = document.getElementById("title-product");
let createPrice = document.getElementById("price-product");
let createDescription = document.getElementById("description-product");

//Récupération dynamique des informations de l'API
function item(response) {
    createImage.style.backgroundImage = "url(" + response.imageUrl + ")";
    createTitle.textContent = response.name;
    createPrice.textContent = (response.price / 100) + " €";
    createDescription.textContent = response.description;

    for (let index = 0; index < response.varnish.length; index++) {
        const element = response.varnish[index];
        let createOptions = document.createElement("option");
        createOptions.textContent = element;
        selectVarnish.appendChild(createOptions);
    }
};

requestApi(item, apiUrl);

//Ajout au panier
let addToCart = document.getElementById("add-to-cart");
addToCart.addEventListener("click", function () {
    let product = { 
        id: id,
        varnish: selectVarnish.value, 
        quantity: selectQuantity.value, 
        image: createImage.style.backgroundImage, 
        name: createTitle.textContent, 
        price: createPrice.textContent 
    };
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