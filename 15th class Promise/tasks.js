// 1)You are tasked with fetching data from a public API asynchronously. Write a function that fetches user data and logs the result or an error.--------------------------------
let success = false;

function getUsers() {
  return new Promise((resolve, reject) => {
    if (!success) {
      fetch("https://dummyjson.com/test")
        .then((response) => response.json())
        .then((users) => resolve(users))
        .catch((error) => reject(error));
    } else {
      reject("Failed to get the user list");
    }
  });
}

function onFulfilled(users) {
  console.log(users);
}

function onRejected(error) {
  console.log(error);
}

const promise = getUsers();
// console.log(promise);
// promise.then(onFulfilled).catch(onRejected);
//-----------------------------------------------------------------------------

// 2)You need to simulate two asynchronous tasks, one that resolves after 1 second and another that resolves after 2 seconds. Log the result when both tasks complete.------------------
const delayPromises = (promises) => {
  Promise.all(promises)
    .then((value) => console.log(value))
    .finally(() => console.log("Both tasks completed."));
};

const promise1 = new Promise((resolve) =>
  setTimeout(() => {
    resolve("First promise fulfilled");
  }, 1000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => {
    resolve("Second promise fulfilled");
  }, 2000)
);

// delayPromises([promise1, promise2]);

// 3)You are asked to create a function that resolves if a number is even and rejects if it is odd. Then, handle the result of the promise.------------------------------------------

// //--INPUT--
// const number = 1;
// function evenOddPromise () {
//   return new Promise( (resolve, reject) => {
//     if(number % 2 === 0){
//       resolve();
//     } else {
//       reject();
//     }
//   });
// }

// const checkEvenOdd = evenOddPromise(number);

// checkEvenOdd.then(()=> console.log("Even")).catch(()=> console.log("Odd"));
