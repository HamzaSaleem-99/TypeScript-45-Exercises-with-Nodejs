"use strict";
let age = 17;
if (age < 2) {
    console.log("the person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("the person ia toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("the person ia kid.");
}
else if (age >= 13 && age < 20) {
    console.log("the person ia teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("the person ia adult.");
}
else {
    console.log("the person is an elder.");
}
