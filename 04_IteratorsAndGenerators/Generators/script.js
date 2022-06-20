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
