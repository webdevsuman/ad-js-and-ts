//1. take array use reduce, for loop, foreach, for off, for in adding elements == sum of elements
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumOfEl = numArray.reduce((acc, cur) => {
  return acc + cur;
});

// console.log(sumOfEl);

//---------For Of
let sum = 0;
for (let i of numArray) {
  sum += i;
}

// console.log(sum);

//-----------For Each
let sum2 = 0;
const sum2Array = numArray.forEach((el) => (sum2 += el));
// console.log(sum2);

//-----------------For In
let sum3 = 0;

//2.---------------------- remove duplicate using reduce, for loop
const inputArray = [1, 1, 2, 2, 2, 3, 3, 4, 5, 6];
//Reduce------
const outputArray = inputArray.reduce(function (acc, cur) {
  if (!acc.includes(cur)) {
    acc.push(cur);
  }

  return acc;
}, []);

// console.log(outputArray);

//-------------For of
const outputArray2 = [];
for (let i of inputArray) {
  if (!outputArray2.includes(i)) {
    outputArray2.push(i);
  }
}
// console.log(outputArray2);

//3.------------------ array of strings;; using reduce and loop==> return longest string

const stringArray = ["name", "age", "address", "email"];
const longestString = stringArray.reduce((acc, cur) => {
  acc = cur.length > acc.length ? cur : acc;
  return acc;
});
// console.log(longestString);

//-----------For Each

let longest = "";
const longestString2 = stringArray.forEach((el) => {
  longest = el.length > longest.length ? el : longest;
});

// console.log(longest);
