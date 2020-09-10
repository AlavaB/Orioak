let validationNumber = document.getElementById("validation-number");
let pageUrl = window.location.href;
let url = new URL(pageUrl);
let command = url.searchParams.get("command");
validationNumber.textContent = command;