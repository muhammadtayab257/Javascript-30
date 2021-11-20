import { ages, inventors } from "./data.js";

// 1: =====ForEach array.forEach(callback(item, index, array))=====
// The forEach() method executes a provided function once for each array element.
const func = (element, index, array) => {
  console.log(element);
};
ages.forEach(func);

// ForEach with NodeList
const items = document.querySelectorAll("ul li");
items.forEach((item) => {
  if (item.textContent == 1) {
    console.log(item);
  }
});

//ForEach with  array of objects
inventors.forEach((item) => {
  console.log(`${item.first}  ${item.last}`);
});

// ForEach with Early exit pattern

inventors.forEach((item, index) => {
  if (index > 4) {
    return false;
  }
  console.log(item);
});





