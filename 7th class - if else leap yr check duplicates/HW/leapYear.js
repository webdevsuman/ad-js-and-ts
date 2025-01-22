const inputYear = 2024; //input

const isLeapYear = (inputYear) => {
  if (inputYear % 400 === 0) console.log(`${inputYear} is a Leap Year!`);
  else if (inputYear % 4 === 0 && inputYear % 100 !== 0)
    console.log(`${inputYear} is a Leap Year!`);
  else console.log(`${inputYear} is Not a Leap Year.`);
};

isLeapYear(inputYear);
