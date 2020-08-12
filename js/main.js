/*récupérer les données de l'API*/
let imageResult = document.getElementsByClassName("picture1");

function imageDataResult() {
    imageDataResult = new XMLHttpRequest;
    imageDataResult.open("GET", "http://localhost:3000/api/furniture");
    imageDataResult.send();
    imageDataResult.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            let response = JSON.parse(this.responseText);
            imageResult.textContent = response.imageUrl;
        }
    }
};



