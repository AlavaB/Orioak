let addTotalProduct = 0;
let finalTotal = document.getElementById("final-total");
    
    function updateFinalTotal() {//Fonction de mise à jour du total
    let getTotals = document.getElementsByClassName("total-product");
        let newTotal = 0;
        if(getTotals) {
            for (let index = 0; index < getTotals.length; index++) {
            const element = getTotals[index];
            newTotal += parseInt(element.textContent.replace(/\D/g, ''));     
        }
    }
    finalTotal.textContent = newTotal + " €";      
};

let cartArray = JSON.parse(localStorage.getItem("cart"));//Lecture données local storage
for (let index = 0; index < cartArray.length; index++) {//pour chaque objets présents dans le tableau j'éxécute la boucle
    const element = cartArray[index];

    let priceNumber = element.price.replace(/\D/g, '');
    let template = document.getElementById("desktop-cart").content;
    let copyHtml = document.importNode(template, true);

    copyHtml.querySelector(".picture-cart").style.backgroundImage = element.image;
    copyHtml.querySelector(".product-name").textContent = element.name;
    copyHtml.querySelector(".product-price").textContent = element.price;
    copyHtml.querySelector(".product-varnish").textContent = element.varnish;
    copyHtml.querySelector(".product-quantity").textContent = element.quantity;
    copyHtml.querySelector(".total-product").textContent = priceNumber * element.quantity + " €";
    document.getElementById("line").appendChild(copyHtml);

    addTotalProduct += parseInt(priceNumber * element.quantity);
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


//Soumission de la commande

let submitOrder = document.getElementById("submit");

submitOrder.addEventListener("click", function() {
    let contact = {
        lastName: lastNameCheck.value, 
        firstName: firstNameCheck,
        email: emailCheck,
        adress: adressCheck,
        city: cityCheck
    };
    let products = [];
    for (let index = 0; index < cartArray.length; index++) {
        const element = cartArray[index];
        products.push(element.id);
    }
    requestApi("", url, )
})


