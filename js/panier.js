let getCart = JSON.parse(localStorage.getItem("cart"));

for (let index = 0; index < getCart.length; index++) { 
    const element = getCart[index];
    
    let lineProduct = document.getElementById("line");//Récupération row sous les titres

    let productLine = document.createElement("div");
    productLine.classList.add("product", "col-lg-12", "padding");
    lineProduct.appendChild(productLine);

    let imageCol = document.createElement("div");
    imageCol.setAttribute("id", "product-image");
    imageCol.classList.add("col-lg-2", "col-md-2");
    productLine.appendChild(imageCol); 

    let image = document.createElement("img");
    Object.assign(image, {//Méthode object.assign pour copier les valuers de toutes les propriétées directes
        id: "image-col",
        width: 100,
        height: 100,
        className: "picture-cart"
    })
    imageCol.appendChild(image);
    image.style.backgroundImage = element.image;
      
    let colName = document.createElement("div");
    colName.classList.add("col-lg-3", "col-md-2", "product-row", "mobile-product");
    productLine.appendChild(colName);
    let name = document.createElement("p");
    name.setAttribute("id", "name-col");
    name.classList.add("product-name");
    name.textContent = element.name;
    colName.appendChild(name);
    
    let colPrice = document.createElement("div");
    colPrice.classList.add("col-lg-2", "col-md-2", "product-row", "mobile-product");
    productLine.appendChild(colPrice);
    let price = document.createElement("p");
    price.setAttribute("id", "price-col");
    price.textContent = element.price;
    colPrice.appendChild(price);
   
    let colVarnish = document.createElement("div");
    colVarnish.classList.add("col-lg-2", "col-md-2", "product-row", "mobile-product");
    productLine.appendChild(colVarnish);
    let varnish = document.createElement("p");
    varnish.setAttribute("id", "varnish-col");
    varnish.textContent = element.varnish;
    colVarnish.appendChild(varnish);

    let colQuantity = document.createElement("div");
    colQuantity.classList.add("col-lg-2", "col-md-2", "product-row", "mobile-product");
    productLine.appendChild(colQuantity);
    let quantity = document.createElement("input");
    Object.assign(quantity, {
        id: "quantity-col",
        type: "number",
        value: 1,
        min: 0,
        max: 50
    })
    quantity.value = element.quantity;
    colQuantity.appendChild(quantity);
    
    let colTotal = document.createElement("div");
    colTotal.setAttribute("id", "total-col");
    colTotal.classList.add("col-lg-1", "col-md-2", "product-row");
    productLine.appendChild(colTotal);
    let total = document.createElement("p");
    total.setAttribute("id", "total");
    total.textContent = element.price * element.quantity;
    colTotal.appendChild(total);
    
    let modifyQuantity = document.getElementById("quantity-col");
    modifyQuantity = document.addEventListener("click", function() {
    let getQuantity = event.target.value * element.price;
    total.textContent = getQuantity;
    event.stopPropagation();
    });

    let finalTotal = document.getElementById("final-total");
    finalTotal.textContent = total.value;
}



/******Validation données formulaire**********/
function check(value, regex, message, errorMessage) {
    if(!regex.test(value)) {
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

lastNameCheck.addEventListener("input", function(event) {
    let lastNameValue = event.target.value;
    let lastNameMessage = document.getElementById("last-name-message");
    check(lastNameValue, lettersRegex, lastNameMessage, "Veuillez saisir un nom valide");
});

firstNameCheck.addEventListener("input", function(event) {
    let firstNameValue = event.target.value;
    let firstNameMessage = document.getElementById("first-name-message");
    check(firstNameValue, lettersRegex, firstNameMessage, "Veuillez saisir un prénom valide");
});

emailCheck.addEventListener("input", function(event) {
    let emailValue = event.target.value;
    let emailMessage = document.getElementById("email-message");
    check(emailValue, emailRegex, emailMessage, "Veuillez saisir une adresse email valide");
});

phoneCheck.addEventListener("input", function(event) {
    let phoneValue = event.target.value;
    let phoneMessage = document.getElementById("phone-message");
    check(phoneValue, phoneRegex, phoneMessage, "Veuillez saisir un numéro de téléphone valide");
});

adressCheck.addEventListener("input", function(event) {
    let adressValue = event.target.value;
    let adressMessage = document.getElementById("adress-message");
    check(adressValue, adressRegex, adressMessage, "Veuillez saisir une adresse valide")
});

postalCodeCheck.addEventListener("input", function(event) {
    let postalCodeValue = event.target.value;
    let postalCodeMessage = document.getElementById("postal-code-message");
    check(postalCodeValue, postalCodeRegex, postalCodeMessage, "Veuillez saisir un code postal valide");
});

cityCheck.addEventListener("input", function(event) {
    let cityValue = event.target.value;
    let cityMessage = document.getElementById("city-message");
    check(cityValue, lettersRegex, cityMessage, "Veuillez saisir un nom de ville valide");
});