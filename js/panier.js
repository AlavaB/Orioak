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

    for (let index = 0; index < cartArray.length; index++) {//pour chaque objets présents dans le tableau j'éxécute la boucle
        const element = cartArray[index];

        let priceNumber = element.price.replace(/\D/g, '');//récupération du prix et suppression des caractères non numérique

        /*let deleteElement = document.querySelector(".delete-element");
        deleteElement.addEventListener("click", 
        
        function() {
            const index = cartArray.indexOf(element);//Récupération de l'index à supprimer
            cartArray.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cartArray));//Nouvelle sauvegarde dans le local storage après supression de l'élément
            document.getElementById(element.id + element.varnish.replace(/\s+/g, '')).remove();//Suppression de la ligne
            updateFinalTotal();
        })*/


        function updateTotals(event) {//Fonction de mise à jour des totaux 
            let getQuantity = event.target.value * priceNumber + " €";
            total.textContent = getQuantity;
            totalMobile.textContent = getQuantity;
            updateFinalTotal();
        }

        //Insertion des objets sélectionnés en desktop
        let template = document.getElementById("desktop-cart").content;
        let copyHtml = document.importNode(template, true);
        let quantity = copyHtml.querySelector(".product-quantity");
        let total = copyHtml.querySelector(".total-product");

        copyHtml.querySelector(".get-id").classList.add(element.id + element.varnish.replace(/\s+/g, ''));
        copyHtml.querySelector(".picture-cart").style.backgroundImage = element.image;
        copyHtml.querySelector(".product-name").textContent = element.name;
        copyHtml.querySelector(".product-price").textContent = element.price;
        copyHtml.querySelector(".product-varnish").textContent = element.varnish;
        quantity.value = element.quantity;
        quantity.addEventListener("change", updateTotals);
        total.textContent = priceNumber * element.quantity + " €";
        document.getElementById("line").appendChild(copyHtml);

        //Insertion des objets sélectionnés en mobile
        let templateMobile = document.getElementById("mobile-cart").content;
        let copyHtmlMobile = document.importNode(templateMobile, true);
        let quantityMobile = copyHtmlMobile.querySelector(".quantity-col");
        let totalMobile = copyHtmlMobile.querySelector(".total-col");

        copyHtmlMobile.querySelector(".get-id").classList.add(element.id + element.varnish.replace(/\s+/g, ''));
        copyHtmlMobile.querySelector(".name-col").textContent = element.name;
        copyHtmlMobile.querySelector(".price-col").textContent = element.price;
        copyHtmlMobile.querySelector(".varnish-col").textContent = element.varnish;
        quantityMobile.value = element.quantity;
        quantityMobile.addEventListener("change", updateTotals);
        totalMobile.textContent = priceNumber * element.quantity + " €";
        document.getElementById("line-mobile").appendChild(copyHtmlMobile);

        addTotalProduct += parseInt(priceNumber * element.quantity);
        finalTotal.textContent = addTotalProduct + " €";
    }
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
lastNameCheck.value = "qsdf";
let firstNameCheck = document.getElementById("first-name");
firstNameCheck.value = "azer";
let emailCheck = document.getElementById("email");
emailCheck.value = "azer@qsdf.wxcv"
let adressCheck = document.getElementById("adress");
adressCheck.value = "azer azer";
let cityCheck = document.getElementById("city");
cityCheck.value = "asc";
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
adressCheck.addEventListener("input", function (event) {
    let adressValue = event.target.value;
    let adressMessage = document.getElementById("adress-message");
    check(adressValue, adressRegex, adressMessage, "Veuillez saisir une adresse valide")
});
cityCheck.addEventListener("input", function (event) {
    let cityValue = event.target.value;
    let cityMessage = document.getElementById("city-message");
    check(cityValue, lettersRegex, cityMessage, "Veuillez saisir un nom de ville valide");
});

//Soumission de la commande
let submitOrder = document.getElementById("submit");

function confirmation(commandResponse) {
    submitOrder.setAttribute("href", "confirmation.html?command=" + commandResponse.orderId);
    localStorage.removeItem("cart");
};



submitOrder.addEventListener("click", function () {
    let contact = {
        firstName: firstNameCheck.value,
        lastName: lastNameCheck.value,
        address: adressCheck.value,
        city: cityCheck.value,
        email: emailCheck.value
    };
    let products = [];
    for (let index = 0; index < cartArray.length; index++) {
        const element = cartArray[index];
        products.push(element.id);
    }
    let request = { contact, products };
    requestApi(confirmation, apiAdress + "order", "POST", request);
})


