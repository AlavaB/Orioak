let rowElement = document.querySelector(".product-list");

function card() {
    let createFirstElement = document.createElement("div");
    createFirstElement.classList.add("col-lg-6", "col-md-6", "margin");
    rowElement.appendChild(createFirstElement);
    
    let createCard = document.createElement("div");
    createCard.classList.add("card");
    createFirstElement.appendChild(createCard);
    
    let createLink = document.createElement("a");
    createLink.classList.add("picture");
    createCard.appendChild(createLink);
    
    let createCardBody = document.createElement("div");
    createCardBody.classList.add("card-body", "text-center");
    createCard.appendChild(createCardBody);

    let createTitle = document.createElement("h2");
    createTitle.classList.add("card-title");
    createCardBody.appendChild(createTitle);

    let createText = document.createElement("p");
    createText.classList.add("card-text", "font-weight-bold");
    createCardBody.appendChild(createText);
};
    
card();
card();
card();
card();

let pictures = document.getElementsByClassName("picture");
let firstPicture = pictures[0];
firstPicture.setAttribute("href", "http://localhost:3000/images/oak_1.jpg");
console.log(firstPicture);