/*
    New array methods/additions with ES6
    - .of method: method to create a new array with a a list of items
    - .from method: allows to specify which array to construct an array from, the two arguments expected are (theArrayToReference, aFunctionToPerformSomeAugmentation/Change); original array is not changed as a new array is made
    - .fill method: applied directly to an array, each value of original array is replaced with the value passed to fill, it "fills" the array with only that value; can specify which index to fill by passing additional arguments. Does change the original array.
    - .find method: expects a function as an input with criteria for array values to pass, will only result with first value that passes and results in true (only one value returned). Good for searching through large arrays to find a specific value.
*/

// Can use the array object as a constructor with .of() to specify values
let array = Array.of(5, 10, 13); // [ 5, 10, 13 ]
console.log(array);

// .from()
let newArray = Array.from(array, (val) => val * 2);
console.log(newArray); // [ 10, 20, 26 ]
// console.log(array); // Old array does not get changed [ 5, 10, 13 ]

// .fill()
// array.fill(100); // [ 100, 100, 100 ]
// Can pass starting and ending indexes to specify which index(es) will be replaced with the fill value
array.fill(100, 1, 2);
console.log(array); // [ 5, 100, 13 ]
array.fill(100, 0, 2);
console.log(array); // [ 100, 100, 16 ]

// .find()
let arrayEx = [10, 12, 16];
// find method will stop when it finds the first match within the array, the first element that results in true
console.log(arrayEx.find((val) => val >= 12)); // 12

var inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function findCherries(fruit) {
  return fruit.name === "cherries";
}
// Helpful for making advanced queries into an array of objects
console.log(inventory.find(findCherries)); // { name: 'cherries', quantity: 5 }
