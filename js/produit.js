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
    if (localStorage.getItem("cart")) {//si cart existe dans local storage on récupère la cart on pousse le produit crée et on enregistre dans local storage
        let cartArray = JSON.parse(localStorage.getItem("cart"));
        for (let index = 0; index < cartArray.length; index++) {
            const element = cartArray[index];
            if (element.id == product.id)
                if (element.varnish == product.varnish) {
                product.quantity = Number(product.quantity) + Number(element.quantity);
                const index = cartArray.indexOf(element);//Récupération de l'index à supprimer
                cartArray.splice(index, 1);
                }                 
        }
        cartArray.push(product);
        localStorage.setItem("cart", JSON.stringify(cartArray));
    } else {
        let cartArray = [];
        cartArray.push(product);
        localStorage.setItem("cart", JSON.stringify(cartArray));
    }
});