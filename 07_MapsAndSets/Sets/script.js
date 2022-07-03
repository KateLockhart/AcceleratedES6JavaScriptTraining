/*
    Sets - new list type object in ES6

    A set is a list of just values, no key value pairs, cannot have repeat values such as an array does. Can only hold unique values, no repeats. The ordering of values in the set does not matter and the values are not indexed. 
*/

// Can initialize a set by passing an array of values
let set = new Set([1, 1, 1]);

set.add(2);
set.add(2);

/* loop below returns: 
    1
    2

    Because the set will only store one 1 even though it was passed three 1 values in the initialization, and one 2 for the same reason even with attempting to use the add method twice.
*/
for (element of set) {
  console.log(element);
}
