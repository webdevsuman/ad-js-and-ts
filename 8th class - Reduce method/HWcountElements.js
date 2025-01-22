// -----------------------Homework--------------
const p = ["apple", "banana", "carrot", "carrot", "dish", "apple", "apple"];
const countElement = p.reduce(countElements, {});

function countElements(acc, cur) {
  if (acc[cur]) {
    // console.log(acc[cur]);
    acc[cur] = acc[cur] + 1;
  } else {
    acc[cur] = 1;
  }
  // console.log(acc);
  return acc;
}

console.log(countElement);

//-------------------------OR-------------------------
const q = ["a", "b", "c", "c", "d", "a", "a"];

const r = q.reduce((acc, cur) => {
  acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
  // console.log(cur, acc[cur]);
  return acc;
}, {});

// console.log(r);

// -----------------------------------------
// Concept
// if (5) {
//   console.log(true);
// } else {
//   console.log(false);
// }
