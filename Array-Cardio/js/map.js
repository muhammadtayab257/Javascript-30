import { ages, numbers, names, matrixPeoples } from "./data.js";

// 1: ===== map((element, index, array) => { ... })
/* The map() method creates a new array populated with the results of calling a provided function 
on every element in the calling array.*/

// Mapping an array of numbers to an array of square roots
const roots = ages.map((element, index) => {
  return Math.sqrt(element);
});

// console.log(roots);

// EXCERSICES
// 1: Make an array of numbers that are doubles of the first array
const doubleNumber = numbers.map((arr) => arr * 2);
console.log(doubleNumber);

// 2: Take an array of numbers and make them strings
const numberToStringArray = numbers.map((number) => {
  return number.toString();
});
console.log(numberToStringArray);

// 3: Capitalize each of an array of names
const capitalizedArray = names.map((name) => {
  return name.charAt(0).toUpperCase() + name.substr(1);
});
console.log(capitalizedArray);

// 4: Make an array of strings of the names saying whether or not they can go to The Matrix
const goToMatrix = matrixPeoples.map((element) => {
  if (element.age <= 17) {
    return (element.name = `${element.name} is under age`);
  } else {
    return (element.name = `${element.name}  can go to The Matrix`);
  }
});
console.log(goToMatrix);

// DIFFRENCE BETWEEN ARRAY.MAO AND ARRAY.FILTER
const numbers1 = [1, 2, 3, 4];
const evens = numbers1.map((item) => item % 2 === 0);
console.log(evens); //[false, true, false, true]

const evens1 = numbers1.filter((item) => item % 2 === 0);
console.log(evens1); // [2, 4]
