// 1: ===== rarray.reduce(starting point , end point)
/*The slice() method returns a shallow copy of a portion of an array into a new array object selected from start 
to end (end not included) where start and end represent the index of items in that array.
The original array will not be modified.*/

import { animals, numbers } from "./data.js";
console.log(animals.slice(0,3))
console.log(numbers.slice(0,4))
console.log(numbers.slice(1,-2))
