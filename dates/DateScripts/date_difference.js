"use strict";

let startDate = new Date("July 11, 2022");
let endDate = new Date("November 11, 2022");

let msec_per_day = 1000 * 60 * 60 * 24;

let elapsedtime = endDate.getTime() - startDate.getTime();

let dayDiff = elapsedtime / msec_per_day;
let result = Math.round(dayDiff);

console.log(result)
