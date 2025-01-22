//
const countries = [
  { code: "US", name: "United States" },
  { code: "CA", name: "Canada" },
  { code: "MX", name: "Mexico" },
  { code: "FR", name: "France" },
  { code: "JP", name: "Japan" },
];

const fullName = countries.reduce((acc, cur) => {
  acc[cur.code] = cur.name;
  // acc[cur["code"]] = cur["name"];
  return acc;
}, {});

console.log(fullName["FR"]);
// --------------------------------
//array 1 to 10
//print only less than 5
//using reduce

//--------------------------------
// array of objects
// name:
// word length <=4 print
