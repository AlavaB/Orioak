let getCart = JSON.parse(localStorage.getItem("cart"));
let addTotalProduct = 0;
let finalTotal = document.getElementById("final-total");

for (let index = 0; index < getCart.length; index++) {
    const element = getCart[index];

    let lineProduct = document.getElementById("line");
    let priceNumber = element.price.replace(/\D/g, '');

    let productLine = document.createElement("div");
    productLine.classList.add("product", "col-lg-12", "padding");
    lineProduct.appendChild(productLine);

    let deleteCol = document.createElement("div");
    deleteCol.classList.add("col-lg-1", "col-md-1", "product-row", "delete")
    productLine.appendChild(deleteCol);  
    let deleteElement = document.createElement("input");
    Object.assign(deleteElement, {
        type: "image",
        title: "supprimer",
        src: "../images/deletion_cross.png"
    })
    deleteCol.appendChild(deleteElement);
    deleteElement.addEventListener("click", function() {
        
        //insérer removeItem
    })

    let imageCol = document.createElement("div");
    imageCol.classList.add("col-lg-2", "col-md-2");
    productLine.appendChild(imageCol);
    let image = document.createElement("img");
    Object.assign(image, {//Méthode object.assign pour copier les valuers de toutes les propriétées directes
        width: 80,
        height: 80,
        className: "picture-cart image-col"
    })
    imageCol.appendChild(image);
    image.style.backgroundImage = element.image;

    let colName = document.createElement("div");
    colName.classList.add("col-lg-2", "col-md-2", "product-row");
    productLine.appendChild(colName);
    let name = document.createElement("p");
    name.classList.add("product-name", "paragraph-product");
    name.textContent = element.name;
    colName.appendChild(name);

    let colPrice = document.createElement("div");
    colPrice.classList.add("col-lg-2", "col-md-2", "product-row");
    productLine.appendChild(colPrice);
    let price = document.createElement("p");
    price.classList.add("paragraph-product");
    price.textContent = element.price;
    colPrice.appendChild(price);

    let colVarnish = document.createElement("div");
    colVarnish.classList.add("col-lg-2", "col-md-2", "product-row");
    productLine.appendChild(colVarnish);
    let varnish = document.createElement("p");
    varnish.classList.add("paragraph-product");
    varnish.textContent = element.varnish;
    colVarnish.appendChild(varnish);

    let colQuantity = document.createElement("div");
    colQuantity.classList.add("col-lg-2", "col-md-2", "product-row");
    productLine.appendChild(colQuantity);
    let quantity = document.createElement("input");
    Object.assign(quantity, {
        type: "number",
        value: 1,
        min: 0,
        max: 50
    })
    quantity.value = element.quantity;
    quantity.addEventListener("change", function (event) {
        let getQuantity = event.target.value * priceNumber + " €";
        total.textContent = getQuantity;
        let getTotals = document.getElementsByClassName("total-product");
        let newTotal = 0;
        for (let index = 0; index < getTotals.length; index++) {
            const element = getTotals[index];
            newTotal += parseInt(element.textContent.replace(/\D/g, ''));
            finalTotal.textContent = newTotal + " €";
        }
    });
    colQuantity.appendChild(quantity);

    let colTotal = document.createElement("div");
    colTotal.classList.add("col-lg-1", "col-md-2", "product-row");
    productLine.appendChild(colTotal);
    let total = document.createElement("p");
    total.classList.add("total-product", "paragraph-product");
    total.textContent = priceNumber * element.quantity + " €";

    colTotal.appendChild(total);
    addTotalProduct += parseInt(priceNumber);
    finalTotal.textContent = addTotalProduct + " €";
}




/******Validation données formulaire**********/
function check(value, regex, message, errorMessage) {
    if (!regex.test(value)) {
        message.textContent = errorMessage;
    } else {
        message.textContent = "";
    }
};

let lastNameCheck = document.getElementById("last-name");
let firstNameCheck = document.getElementById("first-name");
let emailCheck = document.getElementById("email");
let phoneCheck = document.getElementById("phone");
let adressCheck = document.getElementById("adress");
let postalCodeCheck = document.getElementById("postal-code");
let cityCheck = document.getElementById("city");

let lettersRegex = /^[a-zA-ZÀ-ÿ-'\s]{2,}$/;
let emailRegex = /.+@.+\..+/;
let phoneRegex = /^[0-9]{10,10}$/;
let adressRegex = /^[a-zA-Z0-9À-ÿ-'\s]{1,}$/;
let postalCodeRegex = /\d{2}[ ]?\d{3}/;

lastNameCheck.addEventListener("input", function (event) {
    let lastNameValue = event.target.value;
    let lastNameMessage = document.getElementById("last-name-message");
    check(lastNameValue, lettersRegex, lastNameMessage, "Veuillez saisir un nom valide");
});

firstNameCheck.addEventListener("input", function (event) {
    let firstNameValue = event.target.value;
    let firstNameMessage = document.getElementById("first-name-message");
    check(firstNameValue, lettersRegex, firstNameMessage, "Veuillez saisir un prénom valide");
});

emailCheck.addEventListener("input", function (event) {
    let emailValue = event.target.value;
    let emailMessage = document.getElementById("email-message");
    check(emailValue, emailRegex, emailMessage, "Veuillez saisir une adresse email valide");
});

phoneCheck.addEventListener("input", function (event) {
    let phoneValue = event.target.value;
    let phoneMessage = document.getElementById("phone-message");
    check(phoneValue, phoneRegex, phoneMessage, "Veuillez saisir un numéro de téléphone valide");
});

adressCheck.addEventListener("input", function (event) {
    let adressValue = event.target.value;
    let adressMessage = document.getElementById("adress-message");
    check(adressValue, adressRegex, adressMessage, "Veuillez saisir une adresse valide")
});

postalCodeCheck.addEventListener("input", function (event) {
    let postalCodeValue = event.target.value;
    let postalCodeMessage = document.getElementById("postal-code-message");
    check(postalCodeValue, postalCodeRegex, postalCodeMessage, "Veuillez saisir un code postal valide");
});

cityCheck.addEventListener("input", function (event) {
    let cityValue = event.target.value;
    let cityMessage = document.getElementById("city-message");
    check(cityValue, lettersRegex, cityMessage, "Veuillez saisir un nom de ville valide");
});