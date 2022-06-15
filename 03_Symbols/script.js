/*
    Symbols
    - New primitive of ES6
    - Symbols allow the utilization of unique identifiers and are not iterable.
*/

// The Symbol primitive type gets passed a parameter of a description, just a debugging string
let symbol = Symbol("debug");
let anotherSymbol = Symbol("debug");

console.log(symbol); // Result: Symbol(debug)
console.log(typeof symbol); // Result: symbol

console.log(symbol == anotherSymbol); // Result: false, behind the scenes they are unique identifiers

let obj = {
  name: "Kate",
  [symbol]: 22,
};

console.log(obj); // { name: 'Kate', [Symbol(debug)]: 22 }
console.log(obj[symbol]); // 22

/*
    Making two symbols have the same unique id

    Could be useful 
*/

// Age is now the key by using the Symbol constructor and the for constructor method
let symbol1 = Symbol.for("age");
// Will use/need the same key
let symbol2 = Symbol.for("age");

console.log(symbol1 === symbol2); // Result: true

let person = {
  name: "Kate",
  age: 30,
};

function makeAge(person) {
  let ageSymbol = Symbol.for("age");
  person[ageSymbol] = 29;
}

makeAge(person);
console.log(person[symbol1]); // 29, this is not overriding age but is a unique ID
console.log(person["age"]); // 30, the hard value for age key

/*
    Well-Known Symbols
    - Pre-defined implemented and shipped symbols with ES6
*/

class Person {}
// Symbol has static fields/properties that can be accessed, can redefine meta data for classes/items
Person.prototype[Symbol.toStringTag] = "Person";

let aPerson = new Person();

// console.log(aPerson); // Result: Person {} (Prior to line 60)
console.log(aPerson); // Result: Person {} (Post to line 60)

// To primitive Symbol
let numbers = [1, 2, 3];

numbers[Symbol.toPrimitive] = function () {
  return 999;
};

// console.log(numbers + 1); // Result: 1,2,31 (Prior to line 69)
console.log(numbers + 1); // Result: 1000 (Post line 69)

/* 
    MDN Link for Symbols/Symbol Static Properties:
    
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#static_properties
*/
