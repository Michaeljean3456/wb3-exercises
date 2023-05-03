"use strict"
function parseAndDisplayName(wname){
    let firstname = wname.substring(0, 4);
    let lastname = wname.substring(5);

    console.log("Name: " + wname);
    console.log("First Name: " + firstname);
    console.log("Last Name: " + lastname);
}


parseAndDisplayName("Mike Jean")
parseAndDisplayName("John ford")
parseAndDisplayName("Joey Shon")
