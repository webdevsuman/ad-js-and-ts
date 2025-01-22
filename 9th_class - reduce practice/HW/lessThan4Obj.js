// array of objects
// name:
// word length <=4 print

const countries = [
  { name: "United States" },
  { name: "Canada" },
  { name: "Peru" },
  { name: "Mexico" },
  { name: "France" },
  { name: "Japan" },
  { name: "Chad" },
  { name: "Cuba" },
  { name: "India" },
  { name: "Iran" },
  { name: "Irac" },
  { name: "Laos" },
  { name: "Spain" },
  { name: "Togo" },
];

const lessThan5 = countries.reduce((acc, cur) => {
  cur.name.length < 5 && acc.push(cur.name);

  return acc;
}, []);

console.log(lessThan5);
