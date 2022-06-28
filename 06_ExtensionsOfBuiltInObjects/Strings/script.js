/*
    New string methods with ES6
    - startsWith method: checks if string starts with whatever string the method is passed, is case sensitive
    - endsWith method: checks if string ends with whatever string the method is passed, is case sensitive
    - includes method: checks if string includes whatever string the method is passed, is case sensitive; can use for checking the entire string (including the start and end) 
*/

let name = "Katelyn";

// /* ---> .startsWith() <--- */
// console.log(name.startsWith('Kate')); // True
// console.log(name.startsWith('kate')); // False, case sensitive
// console.log(name.startsWith('Kateee')); // False

// /* ---> .endsWith() <--- */
// console.log(name.endsWith('yn')); // True
// console.log(name.endsWith('YN')); // False, case sensitive
// console.log(name.endsWith('nn')); // False

/* ---> .includes() <--- */
console.log(name.includes("Kate")); // True
console.log(name.includes("tel")); // True
console.log(name.includes("Tel")); // False, includes is case sensitive
