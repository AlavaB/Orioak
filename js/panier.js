let addTotalProduct = 0;
let finalTotal = document.getElementById("final-total");
let cartArray = JSON.parse(localStorage.getItem("cart"));//Lecture données local storage
laodCart();

function updateFinalTotal() {//Fonction de mise à jour du total final
    let getTotals = document.getElementsByClassName("total-product");
    let newTotal = 0;
    if (getTotals) {
        for (let index = 0; index < getTotals.length; index++) {
            const element = getTotals[index];
            newTotal += parseInt(element.textContent.replace(/\D/g, ''));
        }
    }
    finalTotal.textContent = newTotal + " €";
};

function laodCart() {//Fonction de création du panier
    
    if (cartArray) {
        for (let index = 0; index < cartArray.length; index++) {//pour chaque objets présents dans le tableau j'éxécute la boucle
            const element = cartArray[index];

            let priceNumber = element.price.replace(/\D/g, '');//récupération du prix et suppression des caractères non numérique
            function updateTotals(event) {//Fonction de mise à jour des totaux 
                let getQuantity = event.target.value * priceNumber + " €";
                total.textContent = getQuantity;
                document.getElementsByClassName("total-final").textContent = getQuantity;
                updateFinalTotal();
            }

            function deleteLine() {
                const index = cartArray.indexOf(element);//Récupération de l'index à supprimer
                cartArray.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(cartArray));//Nouvelle sauvegarde dans le local storage après supression de l'élément
                document.getElementById(combinedSelector).remove();//Suppression de la ligne
                updateFinalTotal();
            }

            //Insertion des objets sélectionnés
            
            let template = document.getElementById("cart").content;
            let copyHtml = document.importNode(template, true);
            let quantity = copyHtml.querySelector(".product-quantity");
            let total = copyHtml.querySelector(".total-product");
            let deleteElement = copyHtml.querySelector(".delete");
            let combinedSelector = element.id + element.varnish.replace(/\s+/g, '');

            copyHtml.querySelector(".get-id").setAttribute("id", combinedSelector);
            copyHtml.querySelector(".picture-cart").style.backgroundImage = element.image;
            copyHtml.querySelector(".product-name").textContent = element.name;
            copyHtml.querySelector(".product-price").textContent = element.price;
            copyHtml.querySelector(".product-varnish").textContent = element.varnish;
            quantity.value = element.quantity;
            quantity.addEventListener("change", updateTotals);
            total.textContent = priceNumber * element.quantity + " €";
            document.getElementById("line").appendChild(copyHtml);
            deleteElement.addEventListener("click", deleteLine);

            addTotalProduct += parseInt(priceNumber * element.quantity);
            finalTotal.textContent = addTotalProduct + " €";
        }
    }
}

/******Validation données formulaire**********/
function check(value, regex, message, errorMessage) {
    if (!regex.test(value)) {
        message.textContent = errorMessage;
        checks[checks.current] = false;
    } else {
        message.textContent = "";
        checks[checks.current] = true;
    }
    if (checks.lastName == true && checks.firstName == true && checks.email == true && checks.address == true && checks.city == true) {
        submitOrder.removeAttribute("disabled");
    } else {
        submitOrder.setAttribute("disabled", "");
    }
};

let lastNameCheck = document.getElementById("last-name");
let firstNameCheck = document.getElementById("first-name");
let emailCheck = document.getElementById("email");
let addressCheck = document.getElementById("address");
let cityCheck = document.getElementById("city");
let lettersRegex = /^[a-zA-ZÀ-ÿ-'\s]{2,}$/;
let emailRegex = /.+@.+\..+/;
let addressRegex = /^[a-zA-Z0-9À-ÿ-'\s]{1,}$/;
let checks = {
    lastName: false,
    firstName: false,
    email: false,
    address: false,
    city: false
}

lastNameCheck.addEventListener("input", function (event) {
    let lastNameValue = event.target.value;
    let lastNameMessage = document.getElementById("last-name-message");
    checks.current = "lastName";
    check(lastNameValue, lettersRegex, lastNameMessage, "Veuillez saisir un nom valide", checks);
});
firstNameCheck.addEventListener("input", function (event) {
    let firstNameValue = event.target.value;
    let firstNameMessage = document.getElementById("first-name-message");
    checks.current = "firstName";
    check(firstNameValue, lettersRegex, firstNameMessage, "Veuillez saisir un prénom valide", checks);
});
emailCheck.addEventListener("input", function (event) {
    let emailValue = event.target.value;
    let emailMessage = document.getElementById("email-message");
    checks.current = "email";
    check(emailValue, emailRegex, emailMessage, "Veuillez saisir une adresse email valide", checks);
});
addressCheck.addEventListener("input", function (event) {
    let addressValue = event.target.value;
    let addressMessage = document.getElementById("address-message");
    checks.current = "address";
    check(addressValue, addressRegex, addressMessage, "Veuillez saisir une adresse valide", checks)
});
cityCheck.addEventListener("input", function (event) {
    let cityValue = event.target.value;
    let cityMessage = document.getElementById("city-message");
    checks.current = "city";
    check(cityValue, lettersRegex, cityMessage, "Veuillez saisir un nom de ville valide", checks);
});

//Soumission de la commande
let submitOrder = document.getElementById("submit");
let finalMessage = document.getElementById("final-message");
submitOrder.setAttribute("disabled", "");

function confirmation(commandResponse) {
    window.location.href = "confirmation.html?command=" + commandResponse.orderId;
};


submitOrder.addEventListener("click", function () {

    if (cartArray) {
        if (cartArray.length > 0) {
            if (checks.lastName == true && checks.firstName == true && checks.email == true && checks.address == true && checks.city == true) {
                let contact = {
                    firstName: firstNameCheck.value,
                    lastName: lastNameCheck.value,
                    address: addressCheck.value,
                    city: cityCheck.value,
                    email: emailCheck.value
                };
                let products = [];
                for (let index = 0; index < cartArray.length; index++) {
                    const element = cartArray[index];
                    products.push(element.id);
                }
                let request = { contact, products };
                requestApi(confirmation, apiAddress + "order", "POST", request);
            }
        } else {
            finalMessage.textContent = "Choisissez au moins un article.";
        }
    } else {
        finalMessage.textContent = "Choisissez au moins un article.";
    }
});


