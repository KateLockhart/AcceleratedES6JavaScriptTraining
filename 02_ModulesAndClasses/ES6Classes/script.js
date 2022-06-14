// Class keyword now replaces: function Person() {}
// The class keyword just gives more flexibility when setting up the class
class Person {
  // Constructor is a method name reserved for ES6 to give the Person class properties, can give parameters to use argument values passed to it
  constructor(name) {
    // this.name = "Kate";
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}

// New keyword allows for a new instance of the class
// let person = new Person();

// Can pass an argument to constructors with parameters when creating a new instance of that class
let person = new Person("Kate");

console.log(person); // Results in: Person { name: 'Kate' }
person.greet();

/*
    Okay, but what about the prototype of person?
    Using the property (. notation) of __proto__ to view the prototype details
*/
console.log(person.__proto__); // Results in object: {}

console.log(person.__proto__ == Object.prototype); // Results in false
console.log(person.__proto__ == Object); // Results in false
// The prototype of person is Person.prototype, same as ES5, the class keyword just gives more flexibility when setting up the class
console.log(person.__proto__ === Person.prototype); // Results in true
