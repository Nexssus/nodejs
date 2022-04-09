"use strict";

// Data type: String
let stringVar = "Hello";
console.log("Data types: String:", stringVar);
console.log(`Backtick string: ${stringVar}`);
console.log("Standard String: ${stringVar}");

//Data type: Number
let integerNumberVar = 123;
let floatNumberVar = 1.23;

console.log("Data types: Number intiger", integerNumberVar);
console.log(`Data types: Number float ${floatNumberVar}`);
floatNumberVar = 120;
console.log(`Data types: Number float ${floatNumberVar}`);

console.log("Data types infinity: ", 1/0);
console.log("Data types: Nall(not a number):", "ABC"/2*5);

let bigInteger = 2348716534871623476n;
console.log("Data types: Bigint: ", bigInteger);
console.log("Maximum safe integer number", Number.MAX_SAFE_INTEGER);

console.log(`Power of backticks: ${2+2}`);


//Data types Boolean
let booleanTrue = true;
let booleanFalse = false;

let booleanIsGerater = 4>10;
console.log("Data types: Boolean:", booleanIsGerater);

//Data types: Null

let nullVar = null;
console.log("Data types: Null:", nullVar);

//Data types: undefined

let undifinedVar;
console.log("Data types: Undefined:", undifinedVar);

//Checking data type

console.log(typeof stringVar);
console.log(typeof integerNumberVar);
console.log(typeof floatNumberVar);
console.log (typeof bigInteger);
console.log(typeof booleanIsGerater);
console.log(typeof nullVar);
console.log(typeof undifinedVar);

// Type of conversion
console.log("===String conversion===");






