/*
    The Math Object received many new methods.
    MDN is a great resource for the functionalities. 
    - sign method: returns 1 or -1 if number passed as argument is positive or negative
    - trunc method: truncates the number and cuts off everything after a decimal point (all decimal places); works better for negative numbers than Math.floor()
*/

/* ---> .sign() <--- */
let num1 = -10;

console.log(Math.sign(num1)); // -1, returns the sign so since number is negative we will get -1

let num2 = 10;

console.log(Math.sign(num2)); // 1, returns the sign so since number is not negative we will get 1

let num3 = 0;

console.log(Math.sign(num3)); // 0, returns 0 when checking the sign of 0

let num4 = NaN;

console.log(Math.sign(num4)); // NaN, returns NaN when checking the sign of NaN

let num5 = "a string";

console.log(Math.sign(num5)); // NaN, returns NaN when checking the sign of a string

/* ---> .trunc() <--- */
let example1 = 0.78;

// the trunc method cuts off the decimal place
console.log(Math.trunc(example1)); // 0,

let example2 = 3.78;

console.log(Math.trunc(example2)); // 3

// More accurate for negative numbers than Math.floor()
let ex3 = -3.78;

console.log(Math.floor(ex3)); // -4
console.log(Math.trunc(ex3)); // -3
