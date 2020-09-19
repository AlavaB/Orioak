/*Insertion dynamique des produits de l'API
**grâce à une boucle qui s'exécute pour chaque objet présent dans l'API
*/
function card(response) {
    for (let index = 0; index < response.length; index++) {//
        const element = response[index];

        let rowElement = document.querySelector(".product-list");
        let createFirstElement = document.createElement("div");
        createFirstElement.classList.add("col-lg-6", "col-md-6", "margin");
        rowElement.appendChild(createFirstElement);
        let createCard = document.createElement("div");
        createCard.classList.add("item");
        createFirstElement.appendChild(createCard);

        let createLink = document.createElement("a");
        createLink.setAttribute("href", "pages/produit.html?id=" + element._id);
        createCard.appendChild(createLink);

        let createImage = document.createElement("div");
        createImage.classList.add("picture");
        createImage.style.backgroundImage = "url(" + element.imageUrl + ")";
        createLink.appendChild(createImage);

        let createCardBody = document.createElement("div");
        createCardBody.classList.add("card-body", "text-center");
        createCard.appendChild(createCardBody);

        let createTitle = document.createElement("h2");
        createTitle.classList.add("card-title");
        createTitle.textContent = element.name;
        createCardBody.appendChild(createTitle);

        let createText = document.createElement("p");
        createText.classList.add("card-text", "font-weight-bold");
        createText.textContent = (element.price / 100) + " €";
        createCardBody.appendChild(createText);
    }
};

requestApi(card, apiAddress);//Fonction d'appel de l'API avec en paramètre insertion des produits et adresse de l'API

