/*   Let & Block Scope   */

// Let creates block scope to contain and define a variable. Re-assignable.

// let name = "Max";
// console.log(name);

//let age = 30;
if (true) {
  let age = 27;
  // console.log(age); // Prints 27 to console
}
// console.log(age); // Prints 30 to console

// -----------------------------------------------------

/*   Constants with "const"   */

// Some use a style guide standard of naming const variables in all capital letters
// Const declared variable values cannot be changed
const AGE = 27;
console.log(AGE);

// When initializing objects or arrays it points to the datatype of an array/object not just the value of the array/object. Can use methods associated to push/change data content of the array/object. The pointer doesn't change just the values of the pointer.
const AGES = [27, 29, 30];
// console.log(AGES); // Results in [27, 29, 30]
AGES.push(25);
// console.log(AGES); // Results in [27, 29, 30, 25]

// -----------------------------------------------------

/*   Hoisting in ES6   */

// Hoisting variables with let and const need the variable to be declared before initialization, unlike var.
let thing;
thing = "this";
// console.log(thing);

// This will work because of how the file is read. Line 42 declares variable first before func runs assigning it
function doSmth() {
  anAge = 27;
}
let anAge;
doSmth();
// console.log(anAge); // Results in 27

// Best practice is to declare all global scope variables at the top of file

// -----------------------------------------------------

/*   (Fat) Arrow Functions   */

// Both structures work
function fu() {
  console.log("Hello!");
}
fu();

// Use parens for passing arguments, if no argument is used empty parens are required, if 2 or more arguments are used parens are required
var fn = () => {
  console.log("Hello!");
};

// If only one argument is used, no parens are needed
var fn = (a) => a + 5;
console.log(fn(3));

// With only one line of code functions {} can be omitted
var fn = () => console.log("Hello!");

var fn = () => "Hello!";
console.log(fn());

// Can be used in almost every logic instance that a typical function structure is used.

// -----------------------------------------------------

/*   (Fat) Arrow Functions and the 'this' Keyword   */

// function fn() {
//     console.log(this);
// }
// fn(); // Returns the window object

// var fn2 = () => console.log(this);
// fn2(); // Also returns the window object

// This used in the classic function fn() can change it's context based on which function is calling it. If added to an event listener on a button click, the this will refer to the button object.

// The fat arrow function, fn2(), keeps it context which is very important comparatively. Less need for bind/apply/call like ES5 workarounds.

// -----------------------------------------------------

/*   Functions and Default Parameters   */

// Applies to traditional and fat arrow functions
// Can set default values to parameters
function isEqualTo(number, compare = 10) {
  return number == compare;
}
console.log(isEqualTo(10)); // Results in true

// Can assign default values to all parameters
function isEqualTo(number = 5, compare = 10) {
  return number == compare;
}
console.log(isEqualTo()); // Results in false

// If passing an argument and the first parameter is assigned a default, it will take the argument and override the default, not give value to compare
// Still keeps the order
function isEqualTo(number = 10, compare) {
  console.log(number); // 11
  console.log(compare); // undefined
  return number == compare;
}
console.log(isEqualTo(11));

// Can also set defaults to calculations
function isEqualTo(number, compare = 10 / 2) {
  return number == compare;
}

// Or set them to other arguments. NOTE: if arguments are passed to the function, the default values will be overridden.
function isEqualTo(number, compare = number) {
  console.log(number); // 11
  console.log(compare); // 20
  return number == compare;
}
console.log(isEqualTo(11, 20));

// Default values can also be set to variables as well
let a = 100;
function isEqualTo(number, compare = a) {
  return number == compare;
}

// Function arguments are read the same order code is, cannot call an argument before it is declared; below will *not* work
function isEqualTo(number = compare, compare = 10) {
  return number == compare;
}

// -----------------------------------------------------

/*   Object Literal Extensions   */

// If values are not specified within object, it will look for surrounding variable names that match object key names

let aName = "Kate";
let aAge = 29;

let ageField = "aAge";

let obj = {
  // Can create property names as strings
  aName: "Katelyn",
  // Can dynamically create property names with the name stored in a variable, can reuse those variables to access those properties
  [ageField]: 28,
  // Methods can be declared within an object as well as made into strings, must be called with []
  "greet me"() {
    console.log(this.aName + " , " + this.aAge);
  },
};
// console.log(obj);
// obj.greet();
// How to call greet method post stringifying it
// obj["greet me"]();

// Will return the same value as console.log(obj.age);
console.log(obj[ageField]);

// -----------------------------------------------------

/*   The Rest Operator   */

// The Rest Operator is denoted with ... and used in the parens that house parameters
// It allows us to convert the list of numbers passed as arguments into an array usable by the function logic

// let numbers = [1, 2, 3, 4, 5]; // To test function

function sumUp(...toAdd) {
  console.log(toAdd); // [100, 10, 20]
  let result;
  for (let i = 0; i < toAdd.length; i++) {
    result += toAdd[i];
  }
  return result;
}
// console.log(sumUp(numbers)); // Used with test
console.log(sumUp(100, 10, 20));

function sumUp(...toAdd) {
  console.log(toAdd); // [100, 10, "20"]
  let result;
  for (let i = 0; i < toAdd.length; i++) {
    result += toAdd[i];
  }
  return result;
}
// Will create array out of all values, thus the string of 20 was added to the end of the sum like so
console.log(sumUp(100, 10, "20")); // Result of "11020"

// -----------------------------------------------------

/*   The Spread Operator   */

// The same notation as the Rest Operator, ... , but used in a different place
// The Spread Operator is used/passed in with the arguments to separate/list out values

let numbers = [1, 2, 3, 4, 5];

console.log(Math.max(numbers)); // Results in NaN because it expects a number type/list of numbers not an array

// The Spread Operator lists value of array numbers versus treating numbers as an array of values
console.log(...numbers); // Result of each number being printed to console
console.log(Math.max(...numbers)); // Results of 5

// -----------------------------------------------------

/*   The for-of Loop   */

// New loop introduced with ES6

let testResults = [1.23, 1.1, 4];

// Shorter syntax for grabbing individual elements of an array to perform an action on each of them
for (let testResult of testResults) {
  console.log(testResult);
}

// -----------------------------------------------------

/*   Template Literals   */

// Basically strings with added features using backticks ` `
// Can run calculations within the ${} as long as the result returns a string

let myName = "Kate";

let description = `
  Can make multiline
  strings.
  And use variables/variable values like ${
    myName + "!!!"
  } using the $ and {} syntax.
`;
console.log(description);

// Can use the \ to escape it if needed
let otherLiteral = `
  Hello, I'm \${name + " the Great"}.
`;
console.log(otherLiteral);

// -----------------------------------------------------

/*   Destructuring - Arrays   */

// Array destructing uses the array [] syntax on the left side of the = to make copies of the values within the original array, does not manipulate the original array. References values based on position.

let nums = [1, 2, 3];

let [b, c, d, e] = nums;

// console.log(b); // Results in 1
// console.log(c); // Results in 2
// console.log(nums); // Results in [1, 2, 3] as the original array is preserved and not manipulated by destructuring

// Arrays are infinite, so if pulling out an non-existent value undefined will be returned.
// console.log(e); // Results in undefined

// Can use the Rest Operator to form an array with the remaining values
let [f, ...g] = nums;
// console.log(g) // Results in [2, 3]

// Can set default values for items that do not have available values, default will not be used if the array already has a value
let [h = 5, i, j, k = 7] = nums;
console.log(h); // Results in 1, will have original value provided from nums array, default is overridden
console.log(k); // Results in 7 versus undefined because a default value was assigned

// Destructuring can be used to swap variable values
let y = 5;
let z = 10;

[z, y] = [y, z];
console.log(y); // Results in 10
console.log(z); // Results in 5

// Can also ignore values
let these = [1, 2, 3];
let [m, , o] = these;
console.log(m); // Results in 1
console.log(o); // Results in 3

// Can destructure in the declaration
let [q, r, s] = [13, "apple", 11];
console.log(q, r); // Results in 13 apple
console.log(s); // Results in 11

// -----------------------------------------------------

/*   Destructuring - Objects   */

// Object destructing is similar to that of arrays, but object syntax requires the {}. References values by the keys name, not by position like arrays.

let thisObj = {
  name: "Kate",
  age: 29,
  greet: function () {
    console.log("Hello there!");
  },
};

// Key names have to match exactly with destructuring
// let {name, age} = thisObj;
// console.log(name, age); // Results in Kate 29

// Will not work as the destructuring isn't position based and cannot have an empty place holder to "skip" an item's value, but it can be left out by not calling the key name
// let {name, , greet} = thisObj;

// This will work
// let {name, greet} = thisObj;
// greet();

// To rename references to the keys of an object, an alias can be used, but the alias of hello must now be used to call/run greet
let { name, greet: hello } = thisObj;
hello();

// -----------------------------------------------------

/*   Destructuring Summary   */

// Allows you to destructure an array or object from complex to simple structures.
// Does not change the original object or array
// Object Destructuring use { } and property key names
// Array Destructuring use [ ] and positions of the values
