import {
  ages,
  ages2,
  numbers,
  names,
  inventors,
  matrixPeoples,
  people,
  kvArray,
  words,
  primeArray,
  invalidArr,
} from "./data.js";

// 1: ===== map((element, index, array) => { ... })
/*The filter() method creates a new array with all elements that pass 
  the test implemented by the provided function.*/

const result = words.filter((word) => word.length > 6);
// console.log(result);

// 1 Filtering out all small values

const smallValues = (value) => {
  return value > 40;
};

const filteredValues = ages.filter(smallValues);
// console.log(filteredValues);
// console.log(ages.filter(smallValues));

// 2:   Find all prime numbers in an array    Confused Unga Bunga
const isPrime = (num) => {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
};
// console.log(primeArray.filter(isPrime));

/* 3: Filtering invalid entries from JSON 
The following example uses filter() to create a filtered json of all elements with non-zero, numeric id.
*/

let invalidEntries = 0;
const filteredById = (item) => {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
};

const arrByID = invalidArr.filter(filteredById);
console.log(arrByID);
