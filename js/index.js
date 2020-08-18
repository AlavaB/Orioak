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

let pictures = document.getElementsByClassName("picture");
let firstPicture = pictures[0];

function imageDataResult() {
    imageDataResult = new XMLHttpRequest;
    imageDataResult.open("GET", "http://localhost:3000/api/furniture");
    imageDataResult.send();
    imageDataResult.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            let response = JSON.parse(this.responseText);
            firstPicture.textContent = response.imageUrl;

        }
    }
}

let titles = document.getElementsByClassName("card-title");
let firstTitle = titles[0];
firstTitle.setAttribute("href", "http")

imageDataResult();
