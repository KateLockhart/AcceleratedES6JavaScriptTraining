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
    Chaining Promises,
    Catching Errors
*/

function waitASecond(seconds) {
  return new Promise(function (resolve, reject) {
    if (seconds > 2) {
      reject("Rejected");
    } else {
      setTimeout(function () {
        seconds++;
        resolve(seconds);
      }, 1000);
    }
  });
}

waitASecond(2) // When 2 or more is passed, will result in error message of Rejected, after reject functionality is implemented with the promise
  .then(waitASecond)
  .then(function (seconds) {
    console.log(seconds);
  })
  .catch(function (error) {
    console.log(error);
  });
// Above results with 2 (from the first note segment of Chaining Promises, prior to reject functionality) because the waitASecond runs first and then gets called a second time with the result from the first ran function on line 43

/*
    Built-in Methods - All and Race
    - All expects an array with all of the promises you want to execute, basically combing all the functionally of the individual promises into one, waits for the last/all promise(s) to finish; if one promise results in a reject case, the reject will be the only result 
    - Race will only wait for the first promise to finish and only take the first promises results into account, the quickest promise to run will be the result regardless if its a pass or fail
*/

let promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Resolved!");
  }, 1000);
});

let promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("Rejected!");
  }, 2000);
});

// Results in Rejected! in the console due to promise2 having the reject case, if one of any of the promises in the array result in a reject case, the rejection will override all the success cases that are technically running and working.
Promise.all([promise1, promise2])
  .then(function (success) {
    console.log(success);
  })
  .catch(function (error) {
    console.log(error);
  });

// Results in Resolved! in the console due to promise1 running fastest and the race method displaying only the result of the fastest promise
Promise.race([promise1, promise2])
  .then(function (success) {
    console.log(success);
  })
  .catch(function (error) {
    console.log(error);
  });
