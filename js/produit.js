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

    let containerElement = document.querySelector(".container-item");
    let rowElement = document.querySelector(".row-item");

    let createFirstCol = document.createElement("div");
    createFirstCol.classList.add("col-lg-6", "card", "margin", "padding");
    rowElement.appendChild(createFirstCol);

    let createImage = document.createElement("img");
    createImage.classList.add("picture");
    createImage.style.backgroundImage = "url(" + response.imageUrl + ")";
    createFirstCol.appendChild(createImage);

    createSecondCol.classList.add("offset-lg-1", "col-lg-5", "margin");
    rowElement.appendChild(createSecondCol);

    let createTitle = document.createElement("h1");
    createTitle.classList.add("display-4", "title-product");
    createTitle.textContent = response.name;
    createSecondCol.appendChild(createTitle);

    let createLine = document.createElement("div");
    createLine.classList.add("border-description");
    createSecondCol.appendChild(createLine);

    let createPrice = document.createElement("h2");
    createPrice.classList.add("display-4", "mt-3", "price");
    createPrice.textContent = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(response.price / 100);
    createSecondCol.appendChild(createPrice);

    //création élément pour sélection vernis
    //création élément pour choix quantité

    let createButton = document.createElement("button");
    createButton.classList.add("btn", "btn-warning", "text-center");
    createButton.textContent = "Ajouter au panier";
    createSecondCol.appendChild(createButton);

    //insérer function pour les 3 éléments avec img checked
    orderInfo(deliveryMessage);
    orderInfo(refundMessage);
    orderInfo(deadlinesMessage);

    let createDescriptionRow = document.createElement("div")
    createDescriptionRow.classList.add("row");
    containerElement.appendChild(createDescriptionRow);

    let createDescriptionCol = document.createElement("div");
    createDescriptionCol.classList.add("col", "margin");
    createDescriptionRow.appendChild(createDescriptionCol);

    let createTitleDescription = document.createElement("h3");
    createTitleDescription.textContent = "Description";
    createDescriptionCol.appendChild(createTitleDescription);

    let createDescription = document.createElement("p");
    createDescription.classList.add("text-justify");
    createDescription.textContent = response.description;
    createDescriptionCol.appendChild(createDescription);
};
    

requestApi(item, apiUrl);