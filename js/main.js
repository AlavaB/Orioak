/*récupérer les données de l'API*/
let imageResult = document.getElementsByClassName("picture1");

function imageDataResult() {
    imageDataResult = new XMLHttpRequest;
    imageDataResult.open("GET", "http://localhost:3000/images/oak_1.jpg");
    imageDataResult.send();
    imageDataResult.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            let response = JSON.parse(this.responseText);
            imageResult.textContent = response.imageUrl;
        }
    }
};

/*Validation du nomde famille*/
let lastNameCheck = document.getElementById("last-name");

lastNameCheck.addEventListener("input", function(event) {
    let lastNameValue = event.target.value;
    let myRegexLastName = /^[a-zA-ZÀ-ÿ-'\s]{2,}$/;
    let messageLastName = document.getElementById("last-name-message");

    if(!myRegexLastName.test(lastNameValue)) {
        messageLastName.textContent = "Veuillez saisir un nom valide";
    } else {
        messageLastName.textContent = "";
    }
});

/*Validation du prénom*/
let firstNameCheck = document.getElementById("first-name");

firstNameCheck.addEventListener("input", function(event) {
    let firstNameValue = event.target.value;
    let myRegexFirstName = /^[a-zA-ZÀ-ÿ-'\s]{2,}$/;
    let messageFirstName = document.getElementById("first-name-message");

    if(!myRegexFirstName.test(firstNameValue)) {
        messageFirstName.textContent = "Veuillez saisir un nom valide";
    } else {
        messageFirstName.textContent = "";
    }
});

/*Validation adresse email*/
let emailCheck = document.getElementById("email");

emailCheck.addEventListener("input", function(event) {
    let emailValue = event.target.value;
    let myRegexEmail = /.+@.+\..+/;
    let messageEmail = document.getElementById("email-message");

    if(!myRegexEmail.test(emailValue)) {
        messageEmail = "Veuillez saisir une adresse email valide";
    } else {
        messageEmail = "ok";
    }
});

/*Validation numéro de téléphone*/
let myRegexTel = /^[0-9]{10,10}$/;



