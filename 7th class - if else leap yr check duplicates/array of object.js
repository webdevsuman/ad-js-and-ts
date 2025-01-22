// ARRAY OF OBJECTS
//name <7; value>4000
const a = [
  {
    name: "nill",
    number: 356466556,
  },
  {
    name: "nulsjlfkj",
    number: 212,
  },
  {
    name: "nillsbi",
    number: 4678,
  },
  {
    name: "nillmsd",
    number: 500,
  },
  {
    name: "nillsbi",
    number: 46785454,
  },
  {
    name: "bbb",
    number: 4678545,
  },
  {
    name: "ccc",
    number: 5000,
  },
];

a.forEach((element) => {
  const name = element.name;
  const number = element.number;
  if (name.length < 7 && number > 4000) console.log(element);
});

// OR

// let b = a.map((element) => {
//   const name = element.name;
//   const number = element.number;
//   if (name.length < 7 && number > 4000) console.log(element);
// });
