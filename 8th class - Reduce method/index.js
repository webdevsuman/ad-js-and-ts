// --------------------REDUCE FUNCTION----------------------
//Array method, returns a single value(array or object or number)
//reduce((accumulator,currentValue),dependency==accumulator initial value)

const a = [1, 2, 3, 4, 5, 6, 7];
const b = a.reduce((acc, cur) => {
  //   console.log(acc, cur);
  return acc + cur;
}, 3);

// console.log(b);
// --------------------------------------------------

const c = ["apple", "cherry", "date", "banana"];
const d = c.reduce((acc, cur) => {
  acc[cur] = cur.length;
  // console.log(acc[cur], cur);
  return acc;
}, {});

// console.log("Result:", d);
// ----------------------------------------------------
// Q) Remove duplicate elements from an array
const m = [1, 1, 1, 1, 2, 2, "apple", "apple"];
const n = m.reduce(removeDuplicates, []);

function removeDuplicates(acc, cur) {
  if (!acc.includes(cur)) {
    acc.push(cur);
  }
  // console.log(acc[cur]);
  return acc;
}

console.log(n);
