//Q) Write a javascript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.--------------------------------------------------------------
const noArray = [5, 4, 1, 2, 9, 1000, 10, 500, 35, 99, 60, 101, 455];
let resultHighest;

const highestNumber = (arr) => {
  resultHighest = arr.reduce((acc, cur) => {
    acc = acc > cur ? acc : cur;
    return acc;
  });
};
highestNumber(noArray);
// console.log(resultHighest);

const highestMinusArray = noArray.filter((i) => i < resultHighest);
// console.log(highestMinusArray);
highestNumber(highestMinusArray);
// console.log(resultHighest);
const secondHighest = resultHighest;

// -------------------------------------
//const noArray = [5, 4, 1, 2, 9, 1000, 10, 500,  35, 99, 60, 101, 455];
let resultLowest;

const lowestNumber = (arr) => {
  resultLowest = arr.reduce((acc, cur) => {
    return acc < cur ? acc : cur;
  });
};
lowestNumber(noArray);
// console.log(resultLowest);

const lowestMinusArray = noArray.filter((i) => i > resultLowest);
// console.log(lowestMinusArray);
lowestNumber(lowestMinusArray);
// console.log(resultLowest);
const secondLowest = resultLowest;
// ---------RESULT-----------------------------------
console.log("Array:", noArray);
console.log(
  `Second Lowest : ${secondLowest} \nSecond Highest : ${secondHighest}`
);
