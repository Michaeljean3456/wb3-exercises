"use strict";
const datetxtbox = document.getElementById("datetxtbox");
const generatebtn = document.getElementById("generatebtn");

function init() {
  generatebtn.onclick = generatebtnclicked;
}

window.onload = init;

function generatebtnclicked() {
  let output;
  output = new Date();
  console.log(output.toString());
  datetxtbox.value = output.toString();
  
}
