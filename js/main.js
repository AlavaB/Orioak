//Variable générique pour adresse localhost:3000
let apiAdress = "http://localhost:3000/api/furniture/";

//Appel de l'API
function requestApi(callback, url) {
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();
    request.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            let response = JSON.parse(this.responseText);
            callback(response);
        }
    }
};


