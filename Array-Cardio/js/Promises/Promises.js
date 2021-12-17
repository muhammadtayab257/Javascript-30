// JAVASCRIPT PROMIESES
import {stocks} from '../data.js';

/* 
let complete = false;
let promise1 = new Promise((resolve, reject) => {
  if (complete) {
    resolve("Promise complete");
  } else {
    reject("Promise Rejected");
  }
});
console.log(promise1);

let promise2 = (complete) => {
  return new Promise((resolve, reject) => {
    if (complete) {
      resolve("Promise complete");
    } else {
      reject("Promise rejected");
    }
  });
};

console.log(promise2(true));


let promise3 = (complete) => {
  return new Promise((resolve, reject) => {
      console.log("Fetching Data Kindly Wait");
    setTimeout(() => {
        if (complete) {
            resolve("Promise complete");
          } else {
            reject("Promise rejected");
          }
    }, 1000);
  });
};

let onFulfilment = (result) => {
  console.log(result);
};
let onRejection = (error) => {
  console.log(error);
};

promise3(true).then(onFulfilment).catch(onRejection);

let promise4 = (a, b) => {
  return new Promise((resolve, reject) => {
    let c = a / b;
    setTimeout(() => {
      if (a,b) {
        resolve(`Your Answer Is ${c}`);
      } else {
        reject("Failed To Calcute");
      }
    }, 1000);
  });
};

let onFulfilment = (result) => {
  console.log(result);
};
let onRejection = (error) => {
  console.log(error);
};

promise4(10, 0).then(onFulfilment).catch(onRejection);
*/

//! ICE CREAM EXAMPLE HOW TO USE PROMISES

let is_shop_open = true

