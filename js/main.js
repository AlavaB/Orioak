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


