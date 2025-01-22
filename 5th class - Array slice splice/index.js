//Array slice()
//Doesn't change the original array

// const a = [1, 2, 3, 4, 5, 6, 7];
// const b = a.slice(0, 3); // Original array doesn't change. New array returns. {{slice(index,position)}}
// console.log(b); // [1,2,3]

/*
const m = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const m1 = m.slice(0, 2);
console.log(m1);
const m2 = m.slice(2, 4);
console.log(m2);
const m3 = m.slice(4, 6);
console.log(m3);
const m4 = m.slice(6, 8);
console.log(m4);
const m5 = m.slice(8, 10);
console.log(m5);
*/

// OR
/* const aa = [];
for (let i = 1; i <= 10; i++) {
  aa.push(i);
}

console.log(aa);
*/

// Array Splice(targetIndex,(positionOfTargetElement-1),value)
//Changes the original array
//array.splice(startIndex,deleteCount,add1,add2,...elements you want to add)

const bb = [1, 2, 3];
bb.splice(2, 0, 2.5); // adds 2.5 b/w 2 and 3
// console.log(bb);

// delete
const cc = [1, 2, 3, 4, 5];
cc.splice(2, 2); // deletes 3,4
// console.log(cc);

//replace

const dd = [1, 2, 3, 4, 5, 6, 7];
dd.splice(3, 1, 4.5);
console.log(dd);
