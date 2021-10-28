"use strict";

import { ages } from "./data.js";

// 1: ===== rarray.reduce(function(total, currentValue, currentIndex, arr), initialValue)
/*The reduce() method executes a user-supplied “reducer” callback function on each element of the
  array, passing in the return value from the calculation on the preceding element.
  The final result of running the reducer across all elements of the array is a single value.*/

let flattened = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(
  (previousValue, currentValue, currentIndex, array) => array
);
console.log(flattened);
// 1: Simple Reduce Example
const reducer = (previousValue, currentValue) => previousValue + currentValue;
console.log(ages.reduce(reducer));

// 2: Sum of values in an object array
let initialValue = 0;
let sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(
  (previousValue, currentValue) => previousValue + currentValue.x,
  initialValue
);
console.log(sum);
