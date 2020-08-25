let pageUrl = window.location.href;
let url = new URL(pageUrl);
let id = url.searchParams.get("id");
let apiUrl = "http://localhost:3000/api/furniture/" + id;


function item(response) {

    let imageCol = document.getElementById("image-col");
    let infoCol = document.getElementById("info-col");
    let line = document.getElementById("line");
    let selectVarnish = document.getElementById("varnish");

    let createImage = document.getElementById("product-image");
    createImage.style.backgroundImage = "url(" + response.imageUrl + ")";

    let createTitle = document.getElementById("title-product");
    createTitle.textContent = response.name;

    let createPrice = document.getElementById("price-product");
    createPrice.textContent = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(response.price / 100);

    let descriptionCol = document.getElementById("description");
    descriptionCol.textContent = response.description;
    
    /*let createVarnishOption = document.createElement("option");
    createVarnishOption.setAttribute("value", response.varnish.length);
    createVarnishOption.textContent = response.varnish.length;
    selectVarnish.appendChild(createVarnishOption);*/

    for (let index = 0; index < response.varnish.length; index++) {
        const element = response.varnish[index];
        let createOptions = document.createElement("option");
        createOptions.textContent = element;
        selectVarnish.appendChild(createOptions);
    }


};
    

requestApi(item, apiUrl);