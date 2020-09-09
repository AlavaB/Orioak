//Variable générique pour adresse localhost:3000
let apiAdress = "http://localhost:3000/api/furniture/";

//Appel de l'API
function requestApi(callback, url, requestType = "GET", jsonBody = undefined) {
    let request = new XMLHttpRequest();
    if (requestType == "GET") {
        request.open(requestType, url);
        request.send();
        request.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                let response = JSON.parse(this.responseText);
                callback(response);
            }
        }
        } else if (requestType == "POST") {
            request.open(requestType, url);
            request.setRequestHeader("Content-Type", "application/json");
            request.send(JSON.stringify(jsonBody));
        }
};



