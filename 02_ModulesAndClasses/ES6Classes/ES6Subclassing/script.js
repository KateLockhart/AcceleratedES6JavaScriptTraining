/*
    Subclassing - Extending Built-in Objects

    Can change or use built-in objects as parent classes to use the properties of.

    https://kangax.github.io/compat-table/es6/ houses an ES6 Compatibility Chart of which objects can be extended.
*/

class ConvertibleArray extends Array {
  convert() {
    let returnArray = [];
    this.forEach((value) => returnArray.push("Converted! " + value));
    return returnArray;
  }
}

let numberArray = new ConvertibleArray();

numberArray.push(1);
numberArray.push(2);
numberArray.push(3);

console.log(numberArray.convert());
