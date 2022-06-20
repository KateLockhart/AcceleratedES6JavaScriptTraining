/*
    Generators
    - Function that can yield values as you call it, closely to the behavior of iterators
    - Looks like a standard function but uses * syntax as a flag for it being a generator versus normal function and the yield keyword
    - All three of these syntax work:
        function * fnName() {}   function* fnName() {}   function *fnName() {}

    - A generator allows us to create an object contained in a function to yield different values, we can then use an iterator to loop through the values
*/

function* select() {
  // the yield keyword acts similarly to return
  yield "House";
  yield "Garage";
}

// When running a generator we will not see anything in the console
// select(); // Nothing is shown from running this

// When a generator runs we get back an iterator, we get an object that we can loop through
let it = select();

console.log(it.next()); // { value: 'House', done: false }
console.log(it.next()); // { value: 'Garage', done: false }
console.log(it.next()); // { value: undefined, done: true }

/*
    Generators in Action
*/

let obj = {
  // Able to use the generator by assigning it to the iterator
  [Symbol.iterator]: gen,
};

// using a generator to loop through an object
function* gen() {
  yield 1;
  yield 2;
}

for (let element of obj) {
  console.log(element);
}

// Dynamic generators
// Generators with parameters
function* gen2(end) {
  for (let i = 0; i < end; i++) {
    try {
      yield i;
    } catch (e) {
      console.log(e);
    }
  }
}

let example = gen2(4);

// console.log(example.next()); // { value: 0, done: false }
// console.log(example.next()); // { value: 1, done: false }
// console.log(example.next()); // { value: 2, done: false }
// console.log(example.next()); // { value: 3, done: false }
// console.log(example.next()); // { value: undefined, done: true }

/*
    Two other iterator methods:
    - throw(), still get the value but can force an error throw 
    - return(), can override the value
*/

console.log(example.next()); // { value: 0, done: false }
console.log(example.throw("An error ocurred...")); // An error ocurred... { value: 1, done: false }
console.log(example.next()); // { value: 2, done: false }
console.log(example.next()); // { value: 3, done: false }
console.log(example.return("This will override the value.")); // { value: 'This will override the value.', done: true }
