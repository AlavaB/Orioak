function card(response) {
    for (let index = 0; index < response.length; index++) {
        const element = response[index];

        let rowElement = document.querySelector(".product-list");
        let createFirstElement = document.createElement("div");
        createFirstElement.classList.add("col-lg-6", "col-md-6", "margin");
        rowElement.appendChild(createFirstElement);

        let createCard = document.createElement("div");
        createCard.classList.add("card");
        createFirstElement.appendChild(createCard);

        let createImage = document.createElement("img");
        createImage.classList.add("picture");
        createImage.style.backgroundImage = "url(" + element.imageUrl + ")";
        createCard.appendChild(createImage);

        let createCardBody = document.createElement("div");
        createCardBody.classList.add("card-body", "text-center");
        createCard.appendChild(createCardBody);

        let createTitle = document.createElement("h2");
        createTitle.classList.add("card-title");
        createTitle.textContent = element.name;
        createCardBody.appendChild(createTitle);

        let createText = document.createElement("p");
        createText.classList.add("card-text", "font-weight-bold");
        createText.textContent = "Prix : " + new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(element.price / 100);
        createCardBody.appendChild(createText);
    }
};


requestApi(card);

