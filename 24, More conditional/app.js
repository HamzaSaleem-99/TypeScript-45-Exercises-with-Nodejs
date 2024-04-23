"use strict";
let car = "bugati";
let upperCaseCar = "BUGATI";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];
// Test for equality and inequality with strings
console.log("\n Is car is equal to bugati?");
console.log(car == "bugati");
console.log("\n Is car is  not equal to bugati?");
console.log(car != "bugati");
// Tests using the Lower case funtions  
console.log("\n Is car is equal to bugati after converting to Lowercase?");
console.log(upperCaseCar.toLowerCase() == "bugati");
console.log("\n Is car is not equal to bugati after converting to Lowercase?");
console.log(upperCaseCar.toLowerCase() != "bugati");
// Numerical tests
// Not equal to
console.log("\n Is ten is not equal to twenty?");
console.log(ten != twenty);
// Equal to
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);
// Greater than
console.log("\n Is ten is greater than zero?");
console.log(ten > 0);
// Less than
console.log("\n Is twenty is less than ten?");
console.log(twenty < ten);
// Greater than or Equal to
console.log("\n Is ten is greater than or equal to five?");
console.log(ten >= 5);
// Less than or Equal to
console.log("\n Is twenty is less than or equal to seven?");
console.log(twenty <= 7);
// Tests using "and" & "or" Operator
// Using & (and)
console.log("\n twenty is not equals to ten and twenty is greater than ten?");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equals to ten and twenty is greater than 30?");
console.log(twenty != 10 && twenty > 30);
// Using || (or)
console.log("\n twenty is greater than 50 or twenty is equals to 20?");
console.log(twenty > 50 || twenty == 20);
console.log("\n twenty is not equal to 20 or twenty is less than 15?");
console.log(twenty != 20 || twenty < 15);
// Test whether an item is include in array
console.log("\n Is orange is include in my array?");
console.log(fruits.includes("orange"));
console.log("\n Is apple is not include in my array?");
console.log(!fruits.includes("apple"));
