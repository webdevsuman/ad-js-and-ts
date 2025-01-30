// Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',un defined, 47, null]
// Expected result : [15, -22, 47]
//----------------------------------------------------------------------

const simArr = [NaN, 0, 15, false, -22, "", undefined, 47, null];
//------ForEach
// const numArr = [];
// simArr.forEach(el => {
//     if(Number(el)){
//         numArr.push(el);
//     }
// })
//---Filter
const numArr = simArr.filter((el) => Number(el));
// console.log(numArr);

//  Write a JavaScript function to sort the following array of objects by title value.
//-------------------------------------------------------------------------------
const toBeSorted = [
  {
    title: 2,
  },
  {
    title: 1,
  },
  {
    title: 3,
  },
  {
    title: 5,
  },
  {
    title: 4,
  },
];
//--- SORT METHOD
toBeSorted.sort((a, b) => a.title - b.title);
// console.log(toBeSorted);

//--- OR
const resultArray = [];
const sortedArray = toBeSorted.reduce((acc, cur) => {
  if (acc.title > cur.title) {
    [acc["title"], cur["title"]] = [cur["title"], acc["title"]];
    resultArray.push(acc);
    resultArray.push(cur);
    return acc;
  } else {
    resultArray.push(cur);
    return cur;
  }
  // return acc;
});
// console.log(resultArray);

// Write a JavaScript function that merges two arrays and removes all duplicate elements.
//--------------------------------------------------------------------------------------

const arrA = [1, 2, 3, 4, 5];
const arrB = [4, 5, 6, 7, 8];
const newArray = [];

function mergeTwoArray(a, b) {
  a.forEach((a) => {
    newArray.push(a);
  });

  b.forEach((b) => {
    if (!a.includes(b)) {
      newArray.push(b);
    }
  });
}

mergeTwoArray(arrA, arrB);
// console.log(newArray);
