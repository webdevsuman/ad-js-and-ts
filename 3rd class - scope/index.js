/*Scope*/

/* Var is a function scope.
Let is a block scope if defined within a block.
Let is a global scope if defined outside.*/

// Global scope
let a = 10;

function hello() {
  console.log(a);
}
console.log(a);
hello();

// Function scope or Local scope
function hello1() {
  let a = 11;
  console.log(a);
}
// console.log(a);
hello1();

// // Block scope
function hello3() {
  {
    let a = 12;
    console.log(a);
  }

  //   console.log(a);
}

hello3();

/*const check = function () {
  {
    a = true;
  }
  console.log(a);
};

check();

console.log(a, typeof a);
*/
