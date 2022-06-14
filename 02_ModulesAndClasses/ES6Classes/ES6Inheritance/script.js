/*
    Inheritance:
    - Inheritance is even more simple with ES6 classes.
    - Think of the initial class as a parent blueprint, with the inheriting classes of more specific blueprints of the overarching blueprint
    - Keywords: 
        extends --> assigns/declares child class to inherit from parent
        super --> direct reference/access to parent properties from child class
*/

// Parent class per this example
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age}!`);
  }
}

// With the extends keyword we are able to inherit from the parent class
class Kate extends Person {
  // Adding properties to the Kate class
  // If you want to use a constructor in a class that extends another class you also have to call the constructor in the parent class; otherwise it's inaccessible
  // Using the super keyword constructor call, you can call/send the argument needed by the parent constructor class
  constructor(age) {
    super("Kate");
    this.age = age;
  }

  /* Showcasing the super and reference capabilities:
  greet() {
    console.log("Hello");
  }

  greetTwice() {
    // This will refer to the child/inheriting class's function
    this.greet(); // Results in Hello

    // This refers to the parent class's function
    super.greet(); // Results in Hello, my name is Kate and I am 29!
  }
  */
}

let kate = new Kate(29);

// This will still work as kate is referencing the Kate class which references and inherits properties of Person class
// kate.greet();
// kate.greetTwice();

// What is the prototype of the child class?
// console.log(kate.__proto__ === Kate.prototype); // True
// console.log(kate.__proto__ === Person); // False
// console.log(kate.__proto__ === Person.prototype); // False

// Extends gives us all the features/properties/methods of the parent class, but the item made from the child class will have the prototype of that child class

/*
    Static methods with classes

    Exporting classes 
*/

// This helper class we don't want to build an object from, but want to use the method it contains
// We can export classes with the export keyword just as we do variables or function (be sure to import to the file where it's intended to be used)
export class Helper {
  // Keyword of static allows for methods to be static so it may be accessed without instantiating the class first
  static logTwice(message) {
    console.log(message);
    console.log(message);
  }
}
// Previously we would still have to instantiate it so it can be used/called
// let helper = new Helper();
// helper.logTwice("Secret tunnel!");

// Helper.logTwice('Logging'); // Result prior to the word static being added to the method: error; method from a class cannot be directly accessed

// By using the static keyword, the method is available with out instantiation
Helper.logTwice("Secret tunnel!");
