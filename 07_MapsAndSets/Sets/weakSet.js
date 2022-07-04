/*
    WeakSet object

    WeakSet may only store objects, not primitive data types like a string or number. Since there are no keys, the value must be an object. This allows for great memory management via garbage collection to clean up unused objects and used objects will not be deleted.

    Still not innumerable, but each object has their own pointer so though they may contain the same key/values pairs, the WeakSet will see each object as individual values.

    No repeat values does still apply, such as with line 17 for setB, only the first two values will be held in the WeakSet, because the obj2 is the exact same object/value (does not take the second pass of it). 

    Able to use .add(), .has(), and .delete(), but not .clear() or .get().
*/

let setA = new WeakSet([{ a: 1 }, { b: 2 }, { b: 2 }]);

console.log(setA.has({ b: 2 })); // false, because objects have their own pointers to them, the WeakSet sees this object as it's own individual object from each of those pass into setA

let obj1 = { a: 1 };
let obj2 = { b: 2 };
let obj3 = { c: 3 };
let setB = new WeakSet([obj1, obj2, obj2]);

setB.delete(obj1);

console.log(setB.has(obj2)); // true

setB.add(obj3);

console.log(setB.has(obj3)); // true
