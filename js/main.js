//Variable générique pour adresse localhost:3000
let apiAddress = "http://localhost:3000/api/furniture/";

//Appel de l'API
function requestApi(method, url, jsonBody) {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open(method, url);
        request.setRequestHeader("content-type", "application/json");//Prévient le service Web que l'on envoie du JSON
        request.onload = function () {//onload similaire onreadystatechange mais pour requête terminée avec succès uniquement
            if (this.status >= 200 && this.status < 300) {
                resolve(JSON.parse(request.response));//Si status = 200-299 envoie de la réponse en JSON
            } else {
                reject({//Sinon autre que 200-299 = erreur
                    status: this.status,
                    statusText: request.statusText
                });
            }
        }
        request.onerror = function () {//onerror réagit à une requête terminée avec erreur
            reject({
                status: this.status,
                statusText: request.statusText
            });
        };
        request.send(JSON.stringify(jsonBody));
    });
}
