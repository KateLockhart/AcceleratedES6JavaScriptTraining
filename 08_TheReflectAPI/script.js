/*
        The Reflect API

        Meta programming tools to evaluate our code during run time. 

        Contains built in static methods to create objects, create/configure properties, call functions, etc.

        It's main advantages are: 
        - Bundling methods into one flexible API a giving us a cleaner and quicker access. 
        - Introduces new methods and features we weren't able to do before.
        - With the Proxy API it allows us a great way to interact with the Proxy API.
*/

/* 
    Creating new objects with the Reflect API, Reflect.construct()

    Useful for working with the Proxy API and bundled methods give us new utilities
*/
// Start with a constructor
class Person {
  constructor(name) {
    this.name = name;
  }
}

function TopObj() {
  this.age = 29;
}

// .construct(), takes up to three parameters
// (constructorFunction/orTheClass, arrayThatSpecifiesArgumentsPassedToConstructor, optional3rdArgumentOfConstructorFn )
let person = Reflect.construct(Person, ["Kate"], TopObj);
console.log(person instanceof Person); // true, without the use of the third parameter of the constructor function

console.log(person.__proto__ == Person.prototype); // false, false due to the use of the function TopObj constructor fn because it will overwrite the prototype changing the prototype to

console.log(person.__proto__ == TopObj); // false

console.log(person.__proto__ == TopObj.prototype); // true, using the TopObj constructor fn changes the prototype of the person object
