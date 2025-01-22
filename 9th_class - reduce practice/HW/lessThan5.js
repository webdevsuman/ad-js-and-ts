//Take an array of 1 to 10. Print from 1 to 5 using reduce.

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const uptoFive = a.reduce((acc, cur) => {
  cur < 6 && acc.push(cur);

  return acc;
}, []);

console.log(uptoFive);
