"use strict";

function displayMailingLabel(name, address, city, state, zip){
    let mailingaddress = "Your mailing address is " + name + address + city + state + zip;
    console.log(mailingaddress);
}

displayMailingLabel("Michael JeanBaptiste", "4356 Withers Road", "Miami", "Florida", "32432");


function addNumbers(num1, num2){
    let somenumber = num1 + num2;
    console.log(somenumber);
}
addNumbers(46, 34);

function displayReceipt(totalDue, amountPaid){
    let Changedue = amountPaid - totalDue;
    console.log("Your change due is $" + Changedue);
}

displayReceipt(190, 200)