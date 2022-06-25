/*
    Promises - helper object to help with asynchronous tasks, much more simple than nested callbacks thanks to promise chaining 
    - Resolve for success case, reject for error case

*/

// let promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve('Done!');
//     }, 1500);
// });

let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("Failed!");
  }, 1500);
});

// Handles the data received with next versus having nesting callbacks
promise.then(
  function (value) {
    console.log(value);
  },
  function (error) {
    console.log(error);
  }
);

/*
    Chaining Promises
*/
