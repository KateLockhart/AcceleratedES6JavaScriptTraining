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
    Creating Objects with Reflect.construct()
    
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

// console.log(person.__proto__ == TopObj); // false

console.log(person.__proto__ == TopObj.prototype); // true, using the TopObj constructor fn changes the prototype of the person object

/*
    Calling Functions with Reflect.apply()

    Using apply the first argument is the method you want to call with out parens as it just needs a reference to the method. The second argument is most important and allows us to specify what the this keyword refers to. It can allow you to fundamentally change how it behaves in JS. Third is any arguments that function requires(none in this case of example below).
*/

class Individual {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, I am ${this.name}!`);
  }

  greetAgain(prefix) {
    console.log(`${prefix}, I'm ${this.name}!`);
  }
}
// Line below is same functionality as 'let individual = new Individual('Kate', 29);' but using the Reflect API (using new Individual is technically less code)
let individual = Reflect.construct(Individual, ["Kate", 29]);

// .apply()
// This argument referring to the individual class instance
Reflect.apply(individual.greet, individual, []); // Hello, I am Kate!

// This argument is referring to an empty object
Reflect.apply(individual.greet, {}, []); // Hello, I am undefined!

// This argument is referring to a name object
Reflect.apply(individual.greet, { name: "Justin" }, []); // Hello, I am Justin!

// With a method that requires an argument
Reflect.apply(individual.greetAgain, { name: "Justin" }, ["...Greetings"]); // ...Greetings, I'm Justin!

/*
    Reflect and Prototypes

    Methods to work with prototypes:
    - .getPrototypeOf(): preferable way to access and find prototypes 
    - .setPrototypeOf(): can change the prototype of the object
*/

class Human {
  constructor() {
    this.name = "Kate";
  }
}

let human = new Human();

Human.prototype.age = 29;

// .getPrototypeOf()
console.log(Reflect.getPrototypeOf(human)); // { age: 29 }, in browser console dev tools the object can be accessed and shows a constructor with name: "Human"

console.log(Reflect.getPrototypeOf(human) === Human.prototype); // true

// .setPrototypeOf()
let proto = {
  age: 30,
};
// (objectToSetPrototype, newPrototypeToSetObjTo)
Reflect.setPrototypeOf(human, proto);

console.log(Reflect.getPrototypeOf(human)); // { age: 30 }, prototype now changed to 'proto' in dev tools
