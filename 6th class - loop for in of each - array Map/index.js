//Loop

// for loop--------------------------------------------------
/*
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i <= a.length - 1; i++) console.log(a[i]);

for (let i = a.length - 1; i >= 0; i--) console.log(a[i]);
*/

//Take an array. Print each element upto 5. Use break.----------------------

// const b = [1, 2, 3, 4, 5, 6, 7, 8];

// for (let i = 0; i <= b.length - 1; i++) {
//   if (i >= 5) break;
//   console.log(b[i]);
//   // (i>=5)? (break;) : console.log(b[i]);//why not work
// }

//For in---------------------------------

//for(let i in a){ console.log(a[i]);}   //Here i is the index of array a.

//For of------------------------------------

//for(let i of a){ console.log(i);}   //Here i is the element of array a.

//For each-----------------------------------

// const a = [1, 2, 3, 4, 5];
//a.forEach((item) => console.log(item)); //easy syntax, used in jsx; item is parameter here.
/* Annonymous function
a.forEach(function (item) {
  console.log(item);
});
*/

// ------------------------------------------------------------------------------
// Map method
/*const a = [1, 2, 3, 4, 5];

const b = a.map((item) => {
  return item;
}); // Works like a loop. But is not a loop. Concept comes under array. Returns a seperate array. For iteration only.


console.log(b); //For print
*/
let a = 6;
console.log((a) => a + 2);
