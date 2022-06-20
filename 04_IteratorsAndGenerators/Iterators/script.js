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

/*
    - Iterator is an object that knows how to access a collection, it can step through the values
    - You can make an object iterable via using the Symbol, you can then loop through it
    - You can also override it as well to completely change the behavior
*/

// * Run Override code demo via highlighting only below this comment

// let array = [1, 2, 3];

// Overriding, by diving in and hard setting values we can change the behavior of the next iterator functionality
// This is the core of each iterative functionality
// array[Symbol.iterator] = function () {
//   let nextValue = 10;
//   return {
//     next: function () {
//       nextValue++;
//       return {
//         done: nextValue > 15 ? true : false,
//         value: nextValue,
//       };
//     },
//   };
// };

//let it = array[Symbol.iterator]();

// When we first tested the override
//console.log(it.next()); // { done: false, value: 10 }

// This now prints the value 11, 12, 13, 14, 15 to the console as each next iterator Symbol loop effects it
// for (let element of array) {
//   console.log(element);
// }

/*
    Creating a Custom, Iterable Object
    - Customizing the ability to access object values, be sure to always include 'done' logic of the next function to keep the loop from running infinitely
*/

let person = {
  name: "kate",
  hobbies: ["Drawing", "Learning Japanese", "Reading"],
  [Symbol.iterator]: function () {
    let i = 0;
    let hobbies = this.hobbies;
    return {
      next: function () {
        let value = hobbies[i];
        i++;
        return {
          done: i > hobbies.length ? true : false,
          value: value,
        };
      },
    };
  },
};

for (let hobby of person) {
  console.log(hobby);
}
