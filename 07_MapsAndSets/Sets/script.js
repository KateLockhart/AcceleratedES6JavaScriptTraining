/*
    Sets - new list type object in ES6

    A set is a list of just values, no key value pairs, cannot have repeat values such as an array does. Can only hold unique values, no repeats. The ordering of values in the set does not matter and the values are not indexed. 
*/

// Can initialize a set by passing an array of values
let set = new Set([1, 1, 1]);

// .add()
set.add(2);
set.add(2);

// .delete(), completely deletes the value from the set, even if 1 is passed multiple times above. Only one value of 1 is added and thus will be deleted, passing multiple does not make them back up values.
//set.delete(1);

// .clear(), will completely clear and wipe all values from the set
// set.clear();

/* loop below returns: 
    1 
    2

    Because the set will only store one 1 even though it was passed three 1 values in the initialization, and one 2 for the same reason even with attempting to use the add method twice.
*/
for (element of set) {
  console.log(element);
}

// .has(), sets do not have a get method functionality but the has method will return true or false if the value passed does exist in the set. There is no need to retrieve the values since it must already be known to check if it exists in the set.
console.log(set.has(1)); // true

/*
    Looping through Sets
    Can use entries, value, and keys method with a set.
    Though there is no real reason to use the keys nor can we use a get method to retrieve them.
*/

/* Result of below:
  [ 1, 1 ]
  [ 2, 2 ]

  Will return arrays of "keys" and values
*/
for (element of set.entries()) {
  console.log(element);
}

// 1, 2
for (element of set.keys()) {
  console.log(element);
}

// 1, 2
for (element of set.values()) {
  console.log(element);
}
