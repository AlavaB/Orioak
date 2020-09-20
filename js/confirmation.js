//Paramètre Get pour récupèration du numéro de commande généré dans la page précédente
let validationNumber = document.getElementById("validation-number");
let pageUrl = window.location.href;
let url = new URL(pageUrl);
let command = url.searchParams.get("command");
validationNumber.textContent = command;

let addTotalProduct = 0;
let cartArray = JSON.parse(localStorage.getItem("cart"));//Lecture données local storage

if (cartArray) {
    for (let index = 0; index < cartArray.length; index++) {//pour chaque objets présents dans le tableau j'éxécute la boucle
        const element = cartArray[index];

        let priceNumber = element.price.replace(/\D/g, '');//récupération du prix et suppression des caractères non numérique
        let template = document.getElementById("recap").content;
        let copyHtml = document.importNode(template, true);
        copyHtml.querySelector(".confirmation-name").textContent = element.name;
        copyHtml.querySelector(".confirmation-quantity").textContent = element.quantity;
        copyHtml.querySelector(".confirmation-total").textContent = priceNumber * element.quantity + " €";
        document.getElementById("confirmation-recap").appendChild(copyHtml);

        let confirmationFinalTotal = document.getElementById("confirmation-final-total");
        addTotalProduct += parseInt(priceNumber * element.quantity);
        confirmationFinalTotal.textContent = addTotalProduct + " €";
    }
    localStorage.removeItem("cart");
} else {    
    window.location.href = "../index.html";
}