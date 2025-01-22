//-----------------------------------------SINGLE INPUT-------------------------------
const inputData = []; //Single Input

const inputDataType = typeof inputData;

switch (inputDataType) {
  case "string":
    console.log("(Is a String)");
    inputData.length === 0
      ? console.log("Data Not Found")
      : console.log("Data Found!");
    break;
  case "number":
    console.log("(Is a Number)");
    inputData === 0
      ? console.log("Data Not Found")
      : console.log("Data Found!");
    break;
  case "object":
    console.log("(Is an Object or Array)");
    inputData === null ||
    JSON.stringify(inputData) === "{}" ||
    inputData.length === 0
      ? console.log("Data Not Found")
      : console.log("Data Found!");
    break;

  default:
    console.log(`Data: ${inputDataType}\nValue: ${inputData}`);
    break;
}
