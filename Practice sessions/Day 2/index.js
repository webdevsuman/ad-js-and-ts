//Q) "Hy I am Good Boy" - return the max word using filter---------------------
const badBoy = "Hy I am Good Boy";
const badBoyArray = badBoy.split(" ");

//----USING REDUCE----
const maxLength = badBoyArray.reduce((acc, cur) => {
  return acc.length > cur.length ? acc : cur;
});

// console.log(maxLength);

//-----USING FILTER-----
let longestString = "";

const maxGood = badBoyArray.filter((str) => {
  str.length > longestString.length && (longestString = str);
  return longestString;
});

// console.log(longestString);

//Q) "Hy I am Good Boy" convert in lower case---------------------------------
const gdBoy = "Hy I am Good Boy";
// console.log(gdBoy.toLowerCase());

//Q) "20-12-2000" return in array----------------------------------------------
const date = "20-12-2000";
// console.log(date.split("-"));

//Q) [1,2,3,4,5,6] return in object------------------------------------------

const arr = [1, 2, 3, 4, 5, 6];

//-----USING SPREAD--------
// const objArr = {...arr};

// -------USING Object.ASSIGN-----
// const objArr0 = array => Object.assign({},array);
// const objArr = objArr0(arr);

//-----USING REDUCE-----
// const objArr = arr.reduce((acc,cur) => {
//     acc[`Item ${cur}`]=cur;
//     return acc;
// },{})

// ------RESULT------
// console.log(objArr);

