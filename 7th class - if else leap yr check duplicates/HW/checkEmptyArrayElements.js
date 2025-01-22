//----------------------------------------ARRAY INPUT--------------------------------
const dataArray = [
  "Suman",
  0,
  "",
  200,
  [1, 2, 3],
  { room: "swamiji" },
  [],
  {},
  null,
  undefined,
];

isEmptyArray(dataArray); //Array Input

// -----------------------------------------
function isEmptyArray(inputData) {
  inputData.forEach((item) => {
    if (
      item === null ||
      item === undefined ||
      item === 0 ||
      item.length === 0 ||
      JSON.stringify(item) === "{}"
    )
      //For Numbers || Strings || Empty Objects
      console.log(`${typeof item} : Data not found`);
    else console.log(`${typeof item} : Data found!`);
  });
}
