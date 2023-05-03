"use strict"
let partCode = "ABC-523-15";
function getSupplier(partCode) {
    const supplierCode = partCode.substring(0, 3)
    console.log("Supplier Code:", supplierCode);
    return supplierCode;
    }
    
    function getProductNumber(partCode) {
    const productNumber = partCode.substring(4, 7);
    console.log("Product Number:", productNumber);
    return productNumber;
    }
    
    function getSize(partCode) {
    const size = partCode.substring(8, 10);
    console.log("Size:", size);
    return size;
    }

    getSupplier(partCode);
    getProductNumber(partCode);
    getSize(partCode);