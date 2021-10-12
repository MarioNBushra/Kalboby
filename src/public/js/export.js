// const axios = require("axios")
// const { response } = require("express");
// const path = require("path")
console.log("Hello from js file");
const linkInput = document.getElementById("link");
const submitButton = document.getElementById("submit");
const img = document.getElementById("img");

const ssHandler = () => {
  console.log(linkInput.value);

  $.ajax({
    type: "POST",
    url: "http://192.168.1.5:5050/process",
    data: JSON.stringify({ link: linkInput.value }),
    success: (response) => {
      // console.log(response.msg);
      // img.removeAttribute("hidden")
      // const img = document.createElement("img");
      // img.src = "/img/example.png";
      
      location.reload();
    },
    error: (err) => {
      console.log(err);
    },
    dataType: "json",
    contentType: "application/json",
  });
};

// axios.post('localhost:5050/process', {"link": linkInput.value})
//     .then(response => console.log(response));
