/******Validation données formulaire**********/
function check(value, regex, message, errorMessage) {
    if(!regex.test(value)) {
        message.textContent = errorMessage;
    } else {
        message.textContent = "";
    }
    let messageDelete = event.target.parentElement.nextSibling.nextSibling;
    event.target.addEventListener("blur", function (e) {
        if (value === "") {
            messageDelete.textContent = "";
        }
    });
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