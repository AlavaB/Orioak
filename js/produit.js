let pageUrl = window.location.href;
let url = new URL(pageUrl);
let id = url.searchParams.get("id");
let apiUrl = "http://localhost:3000/api/furniture/" + id;

let createSecondCol = document.createElement("div");
let deliveryMessage = "Suivi de livraison en ligne ou sur demande";
let refundMessage = "Satisfait ou remboursé (selon conditions générales)";
let deadlinesMessage = "Respect des délais annonçés";

function orderInfo(message) {
    let info = document.createElement("div");
    createSecondCol.appendChild(info);
    let checkedImage = document.createElement("img");
    checkedImage.src = "../images/checked.png";
    checkedImage.classList.add("product-page-info");
    checkedImage.setAttribute("alt", "checked button");
    checkedImage.innerHTML = message;
    info.appendChild(checkedImage);
};

function item(response) {

    let imageCol = document.getElementById("image-col");
    let infoCol = document.getElementById("info-col");
    let line = document.getElementById("line");

    let createImage = document.createElement("img");
    createImage.classList.add("picture");
    createImage.style.backgroundImage = "url(" + response.imageUrl + ")";
    imageCol.appendChild(createImage);

    let createTitle = document.createElement("h1");
    createTitle.classList.add("display-4", "title-product");
    createTitle.textContent = response.name;
    infoCol.appendChild(createTitle);

    let createLine = document.createElement("div");
    createLine.classList.add("layout-line");
    infoCol.appendChild(createLine);

    let createPrice = document.createElement("h2");
    createPrice.classList.add("display-4", "mt-3", "price");
    createPrice.textContent = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(response.price / 100);
    infoCol.appendChild(createPrice);

    let createVarnishSelector = document.createElement("label");
    createVarnishSelector.setAttribute("for", "varnish");
    createVarnishSelector.textContent = "Choisissez le vernis :"
    infoCol.appendChild(createVarnishSelector);

    let selectVarnish = document.createElement("select");
    selectVarnish.setAttribute("name", "varnish");
    selectVarnish.setAttribute("id", "varnish");
    createVarnishSelector.appendChild(selectVarnish);
    
    /*let createVarnishOption = document.createElement("option");
    createVarnishOption.setAttribute("value", response.varnish.length);
    createVarnishOption.textContent = response.varnish.length;
    selectVarnish.appendChild(createVarnishOption);*/
    
    let createQuantitySelector = document.createElement("label");
    createQuantitySelector.setAttribute("for", "quantity");
    createQuantitySelector.textContent = "Indiquez la quantité souhaitée :";
    infoCol.appendChild(createQuantitySelector);

    let createQuantityOption = document.createElement("div");
    createQuantityOption.classList.add("mb-lg-2");
    createQuantitySelector.appendChild(createQuantityOption);
    
    let createQuantityInput = document.createElement("input");
    createQuantityInput.setAttribute("type", "number");
    createQuantityInput.setAttribute("name", "quantity");
    createQuantityInput.setAttribute("id", "quantity");
    createQuantityInput.setAttribute("value", 1);
    createQuantityInput.setAttribute("min", 1);
    createQuantityInput.setAttribute("max", 9);
    createQuantityOption.appendChild(createQuantityInput);
};
    

requestApi(item, apiUrl);