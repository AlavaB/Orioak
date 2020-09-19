//Variable générique pour adresse localhost:3000
let apiAddress = "http://localhost:3000/api/furniture/";

//Appel de l'API
function requestApi(callback, url, requestType = "GET", jsonBody = undefined) {
    let request = new XMLHttpRequest();
    if (requestType == "GET") {//Récupérer des données
        request.open(requestType, url);
        request.send();
        request.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                let response = JSON.parse(this.responseText);
                callback(response);
            }
        }
    } else if (requestType == "POST") {//Envoyer des données
        request.open(requestType, url);
        request.setRequestHeader("content-type", "application/json");//Prévient le service Web que l'on envoie du JSON 
        request.send(JSON.stringify(jsonBody));//Transfome objet JS en JSON
        request.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 201) {
                let commandResponse = JSON.parse(this.responseText);
                callback(commandResponse);
            }
        }
    }
};

