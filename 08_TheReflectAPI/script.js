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

    Reflect.construct(), apply(), and Prototypes Interaction
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
  greet() {
    console.log("Hello!");
  },
};
// (objectToSetPrototype, newPrototypeToSetObjTo)
Reflect.setPrototypeOf(human, proto);

console.log(Reflect.getPrototypeOf(human)); // { age: 30 }, prototype now changed to 'proto' in dev tools

// Using Reflect.apply(), human can access the greet method due to us changing the prototype, in this case we can set the second param to null since we don't want/need it to reference another object
Reflect.apply(human.greet, null, []); // Hello!

/*
    Accessing Properties with Reflect

    - .get(): takes two parameters ( the object, the name of property you want to get the value of ), can still use constructor getters and setters with the get method. Can also take a receiver parameter.
    - .set(): uses three parameters ( object, name of property, value you want to set). Can also take a receiver parameter the effect with this it refers to.
    - .has(): checks to see if the object contains the property, to see if it exists in the object, two arguments ( object, property name ) and returns a true or false result
*/

class HumanBeing {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
// If we have a getter in the constructor and both the constructor and mum had _name = then Mum would return in line 146
let mum = {
  name: "Mum",
};

let humanBeing = new HumanBeing("Kate", 29);

// .get()
console.log(Reflect.get(humanBeing, "name")); // Kate

// .set()
Reflect.set(humanBeing, "name", "Justin");

console.log(Reflect.get(humanBeing, "name")); // Justin

// Using .get() with receiver parameter
console.log(Reflect.get(humanBeing, "name", mum)); // Justin, will still reference the constructor

// Using .set() with receiver parameter
Reflect.set(humanBeing, "name", "Justin", mum);

console.log(mum); // { name: 'Justin' }, line 149 the set method is reassigning the mum name value to Justin

// .has()
console.log(Reflect.has(humanBeing, "name")); // true

/*
    Accessing Properties with Reflect.ownKeys()

    .ownKeys() method is passed the object as an argument and returns all the property keys of the object
*/

// .ownKeys()
console.log(Reflect.ownKeys(humanBeing)); // [ 'name', 'age' ]

/*
    Creating and Deleting Properties with Reflect

    - .defineProperty(): how to add and configure a new property to an existing object, takes parameters of ( target object, name of the property, JS Object used to configure the new property). By default the property is read only, but within the config object can set if it's writable as well as the configurable property which will allow for reconfiguration of the config object values and functionality, the default is false but can be hard set to true. Use MDN Docs for more info on attributes that can be used in the config object.
    - .deleteProperty(): takes two arguments of ( target object, name of property) and deletes the property and value. Clean method call versus the delete keyword previously used.
*/

/*
    Preventing Object Extensions & Wrap Up

    - .preventExtensions(): takes singular argument of the target object, this method prevents any extensions or changes to 'lock' the object so it may no longer be extended.
    - .isExtensible(): takes singular argument of the target object, this checks if the object is locked or able to be extended. Returns a true or false result. 
*/

// isExtensible()
console.log(Reflect.isExtensible(humanBeing)); // true, currently extendable

// .preventExtensions()
Reflect.preventExtensions(humanBeing);

// isExtensible()
console.log(Reflect.isExtensible(humanBeing)); // false, due to line 184

// .defineProperty(), how to add a new property
Reflect.defineProperty(humanBeing, "hobbies", {
  writable: true,
  value: ["TFT", "Programming", "Math", "More programming"],
  // configurable: true
});

// AFTER line 184 is added, results in *undefined*
console.log(humanBeing.hobbies); // [ 'TFT', 'Programming', 'Math', 'More programming' ] // undefined

// New property is writable as set above and can be accessed per usual and reassigned, without writable no change would take place and result of line 190 would be [ 'TFT', 'Programming', 'Math', 'More programming' ] versus an error
//humanBeing.hobbies = ["Bae", "TFT"];

//console.log(humanBeing.hobbies); // [ 'Bae', 'TFT' ]

// .deleteProperty()
// Reflect.deleteProperty(humanBeing, "age");

//console.log(humanBeing.age); // undefined, due to deletion above
