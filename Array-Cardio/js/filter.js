import { ages, names, matrixPeoples, words, invalidArr } from "./data.js";

// 1: ===== filter((element, index, array) => { ... })
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
// console.log(arrByID);

// 4: Given an array of numbers, return a new array that has only the numbers that are 5 or greater

const filterByAge = (number) => {
  if (number > 40) {
    return true;
  }
  false;
};
const arrByAge = ages.filter(filterByAge);
const arrByAge1 = ages.filter((age) => age >= 40);
// console.log(arrByAge);

// 5: Given an array of numbers, return a new array that only includes the even numbers.
const filterByEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};
const arrByEven = ages.filter(filterByEven);
const arrByEven1 = ages.filter((age) => age % 2 === 0);
// console.log(arrByEven1);

// 6:  Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
const filterByFiveString = (string) => {
  if (string.length < 5) {
    return true;
  }
  return false;
};
const arrByFive = names.filter(filterByFiveString);
const arrByFive1 = names.filter((name) => name.length < 5);
// console.log(arrByFive1);

// 7: Given an array of people objects, return a new array that has filtered out all those who don't belong to the club

const filterByMembership = (members) => {
  if (members.member === true) return true;
  return false;
};
const arrByMemberTrue = matrixPeoples.filter(filterByMembership);
const arrByMemberTrue1 = matrixPeoples.filter(
  (members) => members.member === true
);
// console.log(arrByMemberTrue1);

// 8: Searching in array
const filterBySearch = (arr, query) => {
  return arr.filter((element) => {
    return element.toLowerCase().includes(query.toLowerCase());
  });
};
// console.log(filterBySearch(names, "Tay"));
