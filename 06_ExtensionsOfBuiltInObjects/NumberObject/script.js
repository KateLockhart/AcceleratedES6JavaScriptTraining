/*
    Number object and methods additions registered to global number object functionality in ES6.
    - Number.isNaN()
    - Number.isFinite()
    - Number.isInteger()
*/

let num1 = NaN;

console.log(Number.isNaN(num1)); // True

let num2 = 10000000000;
let num3 = Infinity;

console.log(Number.isFinite(num2)); // True
console.log(Number.isFinite(num3)); // False

let num4 = 10.3;

console.log(Number.isInteger(num2)); // True
console.log(Number.isInteger(num3)); // False, infinity of num3 is not an integer
console.log(Number.isInteger(num4)); // False, this is technically a float thus is not an integer. JS doesn't have the numerical typing like C and other languages specify. Good use of this method to check if int or float.
