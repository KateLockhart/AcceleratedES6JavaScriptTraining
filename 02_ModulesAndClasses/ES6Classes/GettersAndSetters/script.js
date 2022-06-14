/*
    Getters And Setters
*/

// Creating a property of name (._name) that is gated by the get name() function so we control the access
class Person {
  constructor(name) {
    this._name = name;
  }

  // Used to control data returned
  get name() {
    return this._name.toUpperCase();
  }

  // Used to create barriers or restrictions on what can be used for the
  set name(value) {
    if (value.length > 2) {
      this._name = value;
    }
    console.log("Rejected");
  }
}

let person = new Person("Kate");

console.log(person); // Person { _name: 'Kate' }
console.log();

let person2 = new Person("Ao");

console.log(person2); // Person { _name: 'Ao' }
person2.name = "Op"; // Rejected message in console because it does not satisfy the setter

// 'Max' will get assigned to the private name and change it from 'Ao'
person2.name = "Max";
console.log(person2); // Person { _name: 'Max' }
console.log(person2.name); // MAX
