function requestApi(callback) {
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:3000/api/furniture");
    request.send();
    request.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            let response = JSON.parse(this.responseText);
            callback(response);
        }
    }
};
