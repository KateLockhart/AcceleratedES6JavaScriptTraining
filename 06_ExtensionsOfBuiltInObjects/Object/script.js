/*
        The Object
        - assign method: creates a "new object" from other objects by merging the key and value pair data, the object passed as the first argument will be the prototype of our new object. You aren't creating an entirely new object, but actually taking the first object passed in the method and adding(merging) all other object data to it.
        - .setPrototypeOf method: allows us to change the prototype of an object after it has been created
 */

var obj1 = {
  a: 1,
};

var obj2 = {
  b: 2,
};

// assign method allows us to merge multiple objects
var obj3 = Object.assign(obj1, obj2);

console.log(obj3);

/* What happens when we merge objects with different constructors and thus prototypes? */

class ObjA {
  constructor() {
    this.a = 1;
  }
}

class ObjB {
  constructor() {
    this.b = 2;
  }
}

var objA = new ObjA();
var objB = new ObjB();

// The first object passed into assign will be the base object, which will become the prototype of the new object (aka new object inherits the prototype of the first argument of the assign method)
var obj = Object.assign(objA, objB);

console.log(obj); // The assign method still works and prints a result of: ObjA { a: 1, b: 2 }

// Testing the prototype of obj
console.log(obj instanceof ObjA); // True
console.log(obj instanceof ObjB); // False

console.log(obj.__proto__ === ObjA.prototype); // True
console.log(obj.__proto__ === ObjB.prototype); // False
console.log(obj.__proto__ === Object.prototype); // False

// Can pass an empty object as the first/base object
let newObj = Object.assign({}, objA, objB);

console.log(newObj); // { a: 1, b: 2 }
console.log(newObj.__proto__ === Object.prototype); // True

/*
    Other new method of .setPrototypeOf
*/
let person = {
  name: "Kate",
};

let boss = {
  name: "Justin",
};

console.log(person.__proto__ === Object.__proto__); // True

// Allows us to change the prototype of an object after it has been created
Object.setPrototypeOf(person, boss);

console.log(person.__proto__ === Object.__proto__); // False
console.log(person.__proto__ === boss); // True
