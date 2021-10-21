import { ages, ages2, numbers, inventors, people, kvArray } from "./data.js";

// 1: ===== map((element, index, array) => { ... })
/* The map() method creates a new array populated with the results of calling a provided function 
on every element in the calling array.*/

// Mapping an array of numbers to an array of square roots
const roots = ages.map((element, index) => {
  return Math.sqrt(element);
});

console.log(roots);

// EXCERSICE
// 1: Make an array of numbers that are doubles of the first array
const doubleNumber = numbers.map((arr) => arr * 2);
console.log(doubleNumber);

// 2: Take an array of numbers and make them strings

const numberToStringArray = numbers.map(number => {
  return number.toString();
})
console.log(numberToStringArray);