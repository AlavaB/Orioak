function card(url, name, price) {
    let rowElement = document.querySelector(".product-list");
    let createFirstElement = document.createElement("div");
    createFirstElement.classList.add("col-lg-6", "col-md-6", "margin");
    rowElement.appendChild(createFirstElement);
    
    let createCard = document.createElement("div");
    createCard.classList.add("card");
    createFirstElement.appendChild(createCard);
    
    let createImage = document.createElement("img");
    createImage.src = url;
    createImage.classList.add("mobile-picture");
    createImage.setAttribute("height", 500);
    createCard.appendChild(createImage);
    
    let createCardBody = document.createElement("div");
    createCardBody.classList.add("card-body", "text-center");
    createCard.appendChild(createCardBody);

    let createTitle = document.createElement("h2");
    createTitle.classList.add("card-title");
    createTitle.textContent = name;
    createCardBody.appendChild(createTitle);

    let createText = document.createElement("p");
    createText.classList.add("card-text", "font-weight-bold");
    createText.textContent = "Prix : " + new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price/100);
    createCardBody.appendChild(createText);
};
    
function requestApi() {
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:3000/api/furniture");
    request.send();
    request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            let response = JSON.parse(this.responseText);
            for (let index = 0; index < response.length; index++) {
                const element = response[index];
                card(element.imageUrl, element.name, element.price);
            }
        }
    }
};

requestApi();