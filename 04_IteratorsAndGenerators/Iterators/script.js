/*
    Iterators 
    - An object/item you can loop through
 */

let array = [1, 2, 3];

// Arrays have a symbol that represents its iterative capability
console.log(typeof array[Symbol.iterator]); // Result: function

let it = array[Symbol.iterator]();

// This only has one method, the next method
console.log(it); // Result: Object [Array Iterator] {}

console.log(it.next()); // { value: 1, done: false }
console.log(it.next()); // { value: 2, done: false }
console.log(it.next()); // { value: 3, done: false }
// Done is only set to true once it has exhausted all values in the collection, in our original variable array example we have index 0-2 or 3 items to iterate through.
console.log(it.next()); // { value: undefined, done: true }}

// Iterator is an object that knows how to access a collection, it can step through the values
