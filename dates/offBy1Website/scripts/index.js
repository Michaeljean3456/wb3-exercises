"use strict";

const datetxtbox = document.getElementById("datetxtbox");
const generatebtn = document.getElementById("generatebtn");
const textfor = document.getElementById("textfor");

function init() {
  generatebtn.onclick = generatebtnclicked;
}

window.onload = init;

function generatebtnclicked() {
  let output;
  output = new Date(datetxtbox.value);
  console.log(output.toString());
  textfor.innerHTML = output.toDateString();  
}
