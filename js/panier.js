let cartArray = JSON.parse(localStorage.getItem("cart"));//Lecture données local storage
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

for (let index = 0; index < cartArray.length; index++) {//pour chaque objets présents dans le tableau j'éxécute la boucle
    const element = cartArray[index];

    //Création dynamique de la version desktop 
    let lineProduct = document.getElementById("line");
    let priceNumber = element.price.replace(/\D/g, '');

    let productLine = document.createElement("div");//Création ligne produit avec id
    productLine.setAttribute("id", element.id);
    productLine.classList.add("row", "product");
    lineProduct.appendChild(productLine);

    let colDelete = document.createElement("div");//Création bouton de suppression
    colDelete.classList.add("col-lg-1", "col-md-1", "product-row", "delete")
    productLine.appendChild(colDelete);  
    let deleteElement = document.createElement("input");
    Object.assign(deleteElement, {
        type: "image",
        title: "supprimer",
        src: "../images/deletion_cross.png"
    })
    
    deleteElement.addEventListener("click", function() {
        const index = cartArray.indexOf(element);//Récupération de l'index à supprimer
        cartArray.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cartArray));//Nouvelle sauvegarde dans le local storage après supression de l'élément
        document.getElementById(element.id).remove();//Suppression de la ligne
        updateFinalTotal();
    })
    colDelete.appendChild(deleteElement);

    let colImage = document.createElement("div");//Création de la colonne image produit
    colImage.classList.add("col-lg-2", "col-md-2");
    productLine.appendChild(colImage);
    let image = document.createElement("img");
    Object.assign(image, {
        width: 80,
        height: 80,
        className: "picture-cart image-col"
    })
    colImage.appendChild(image);
    image.style.backgroundImage = element.image;

    let colName = document.createElement("div");//Création de la colonne nom produit
    colName.classList.add("col-lg-2", "col-md-2", "product-row");
    productLine.appendChild(colName);
    let name = document.createElement("p");
    name.classList.add("product-name", "paragraph-product");
    name.textContent = element.name;
    colName.appendChild(name);

    let colPrice = document.createElement("div");//Création de la colonne prix produit
    colPrice.classList.add("col-lg-2", "col-md-2", "product-row");
    productLine.appendChild(colPrice);
    let price = document.createElement("p");
    price.classList.add("paragraph-product");
    price.textContent = element.price;
    colPrice.appendChild(price);

    let colVarnish = document.createElement("div");//Création de la colonne vernis
    colVarnish.classList.add("col-lg-2", "col-md-2", "product-row");
    productLine.appendChild(colVarnish);
    let varnish = document.createElement("p");
    varnish.classList.add("paragraph-product");
    varnish.textContent = element.varnish;
    colVarnish.appendChild(varnish);

    let colQuantity = document.createElement("div");//Création de la colonne quantité
    colQuantity.classList.add("col-lg-2", "col-md-2", "product-row");
    productLine.appendChild(colQuantity);
    let quantity = document.createElement("input");
    Object.assign(quantity, {
        type: "number",
        name: "quantity",
        value: 1,
        min: 0,
        max: 50
    })
    quantity.value = element.quantity;
    quantity.addEventListener("change", function (event) {
        let getQuantity = event.target.value * priceNumber + " €";
        total.textContent = getQuantity;
        updateFinalTotal();
    });
    colQuantity.appendChild(quantity);

    let colTotal = document.createElement("div");//Création de la colonne total
    colTotal.classList.add("col-lg-1", "col-md-1", "product-row", "padding");
    productLine.appendChild(colTotal);
    let total = document.createElement("p");
    total.classList.add("total-product", "paragraph-product");
    total.textContent = priceNumber * element.quantity + " €";

    colTotal.appendChild(total);
    addTotalProduct += parseInt(priceNumber * element.quantity);
    finalTotal.textContent = addTotalProduct + " €";

    //Création dynamique de la version mobile 
    let mobileLineProduct = document.getElementById("line-mobile");

    let mobileProductLine = document.createElement("div");//Création div avec id
    mobileProductLine.setAttribute("id", element.id);
    mobileLineProduct.appendChild(mobileProductLine);


    let rowNameMobile = document.createElement("div");//Création de la ligne nom produit
    rowNameMobile.classList.add("row", "name-row", "row-mobile");
    mobileProductLine.appendChild(rowNameMobile);
    
    let productNameMobile = document.createElement("div");//Création div affichage nom
    productNameMobile.classList.add("col-xs-6", "product-name");
    rowNameMobile.appendChild(productNameMobile);
    let productName = document.createElement("p");
    productName.classList.add("name-size");
    productName.textContent = element.name;
    productNameMobile.appendChild(productName);


    let colDeleteMobile = document.createElement("div");//Création bouton de suppression
    rowNameMobile.appendChild(colDeleteMobile);  
    let deleteElementMobile = document.createElement("input");
    Object.assign(deleteElementMobile, {
        type: "image",
        title: "supprimer",
        src: "../images/deletion_cross.png",
        className: "delete-button"
    })
    deleteElementMobile.addEventListener("click", function(event) {
        const index = cartArray.indexOf(element);//Récupération de l'index à supprimer
        cartArray.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cartArray));//Nouvelle sauvegarde dans le local storage après supression de l'élément
        document.getElementById(element.id).remove();//Suppression de la ligne
        updateFinalTotal();
    })
    colDeleteMobile.appendChild(deleteElementMobile);


    let rowPriceMobile = document.createElement("div");//Création de la ligne prix produit
    rowPriceMobile.classList.add("row", "row-mobile");
    mobileProductLine.appendChild(rowPriceMobile);
    
    let priceLineMobile = document.createElement("div");//Création div titre prix
    priceLineMobile.classList.add("col-xs-6", "mobile-title",  "pt-3");
    rowPriceMobile.appendChild(priceLineMobile);
    let priceTitle = document.createElement("p");
    priceTitle.textContent = "Prix unitaire";
    priceLineMobile.appendChild(priceTitle);
    
    let productPriceMobile = document.createElement("div");//Création div affichage prix
    productPriceMobile.classList.add("col-xs-6", "pt-3");
    rowPriceMobile.appendChild(productPriceMobile);
    let productPrice = document.createElement("p");
    productPrice.classList.add("price-col");
    productPrice.textContent = element.price;
    productPriceMobile.appendChild(productPrice);


    let rowVarnishMobile = document.createElement("div");//Création de la ligne vernis
    rowVarnishMobile.classList.add("row", "row-mobile");
    mobileProductLine.appendChild(rowVarnishMobile);

    let varnishLineMobile = document.createElement("div");//Création div titre vernis
    varnishLineMobile.classList.add("col-xs-6", "mobile-title", "pt-3");
    rowVarnishMobile.appendChild(varnishLineMobile);
    let varnishTitle = document.createElement("p");
    varnishTitle.textContent = "Vernis";
    varnishLineMobile.appendChild(varnishTitle);
    
    let productVarnishMobile = document.createElement("div");//Création div affichage vernis
    productVarnishMobile.classList.add("col-xs-6", "pt-3");
    rowVarnishMobile.appendChild(productVarnishMobile);
    let productVarnish = document.createElement("p");
    productVarnish.classList.add("varnish-col");
    productVarnish.textContent = element.varnish;
    productVarnishMobile.appendChild(productVarnish);


    let rowQuantityMobile = document.createElement("div");//Création de la ligne quantité
    rowQuantityMobile.classList.add("row", "row-mobile");
    mobileProductLine.appendChild(rowQuantityMobile);

    let quantityLineMobile = document.createElement("div");//Création div titre quantité
    quantityLineMobile.classList.add("col-xs-6", "mobile-title", "pt-3");
    rowQuantityMobile.appendChild(quantityLineMobile);
    let quantityTitle = document.createElement("p");
    quantityTitle.textContent = "Quantité";
    quantityLineMobile.appendChild(quantityTitle);
    
    let productQuantityMobile = document.createElement("div");//Création div affichage quantité
    productQuantityMobile.classList.add("col-xs-6", "pt-3");
    rowQuantityMobile.appendChild(productQuantityMobile);
    let productQuantity = document.createElement("input");
    Object.assign(productQuantity, {
        type: "number",
        name: "quantity",
        value: 1,
        min: 0,
        max: 50
    })
    productQuantity.textContent = element.quantity;
    productQuantityMobile.appendChild(productQuantity);

    
    let rowTotalMobile = document.createElement("div");//Création de la ligne total
    rowTotalMobile.classList.add("row", "row-mobile", "total-row");
    mobileProductLine.appendChild(rowTotalMobile);

    let totalLineMobile = document.createElement("div");//Création div titre total
    totalLineMobile.classList.add("col-xs-6", "mobile-title", "pt-3");
    rowTotalMobile.appendChild(totalLineMobile);
    let totalTitle = document.createElement("p");
    totalTitle.textContent = "Total produit";
    totalLineMobile.appendChild(totalTitle);
    
    let productTotalMobile = document.createElement("div");//Création div affichage total
    productTotalMobile.classList.add("col-xs-6", "pt-3");
    rowTotalMobile.appendChild(productTotalMobile);
    let productTotal = document.createElement("p");
    productTotal.textContent = priceNumber * element.quantity + " €";
    productTotalMobile.appendChild(productTotal);
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


