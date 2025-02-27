let consoleForm = document.getElementById("consoleForm");
let requestUrl = document.getElementById("requestUrl");
let requestMethod = document.getElementById("requestMethod");
let requestBody = document.getElementById("requestBody");

let responseStatus = document.getElementById("responseStatus");
let responseBody = document.getElementById("responseBody");

function submitFormDataPost(requestBodyValue) {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer b6fbb63ccd8e98da2a5f07ae4345ad65582c921245bbb35bb37539c55fe860a0",
    },
    body: JSON.stringify(JSON.parse(requestBodyValue)),
  };

  let url = requestUrl.value;
  fetch(url, options)
    .then(function (response) {
      responseStatus.textContent = response.status;
      return response.json();
    })
    .then(function (jsonData) {
      let { code } = jsonData;
      responseStatus.value = code;
      responseBody.textContent = JSON.stringify(jsonData, null, 2);
    })
    .catch(error => {
      responseBody.textContent = error;
    });
}

function submitFormDataPut(requestBodyValue) {
  let options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer b6fbb63ccd8e98da2a5f07ae4345ad65582c921245bbb35bb37539c55fe860a0",
    },
    body: JSON.stringify(JSON.parse(requestBodyValue)),
  };

  let url = requestUrl.value+"/7727823";
  console.log(url);
  fetch(url, options)
    .then(function (response) {
       responseStatus.textContent = response.status;
      return response.json();
    })
    .then(function (jsonData) {
      let { code } = jsonData;
      responseStatus.value = code;
      responseBody.textContent = JSON.stringify(jsonData, null, 2);
    })
    .catch(error => {
      responseBody.textContent = error;
    });
}

consoleForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const requestBodyValue = requestBody.value;
  let request;
  requestMethod.addEventListener("change", function(event){
      request = event.target.value;
      console.log(request);
  });
  if (requestMethod.value === "POST") {
    submitFormDataPost(requestBodyValue);
  } else if (requestMethod.value === "PUT") {
    submitFormDataPut(requestBodyValue);
  }
});