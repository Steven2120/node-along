const getInput = require("./get-input.js");

let userAge = getInput();

if (userAge === "--help") {
    console.log("Please enter your age after 'node mental-age.js' and a space");
}

const mentalAge = userAge / 2 + 3;

console.log("You are " + userAge + " years old.");

console.log("Your mental age is " + mentalAge + " years old.");


// let userAge = getInput();
// console.log(userAge / 2 + 3);
