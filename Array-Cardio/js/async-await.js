const API_1_URL = `https://api.github.com/users`;
const API_2_URL = `https://randomuser.me/api/?results=10`;
const API_3_URL = `https://api.openweathermap.org/data/2.5/weather?q=islamabad&appid=3265874a2c77ae4a04bb96236a642d2f`;

//TODO GETTING DATA USING ASYNC AWAIT
// const FIRST_DATA = async () => {
//   try {
//     const response = await fetch(API_1_URL);
//     const data = await response.json();
//     console.log("Im Api Github User Data Console", data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const SECOND_DATA = async () => {
//   try {
//     const response = await fetch(API_3_URL);
//     const data = await response.json();
//     console.log("Im  Weather Data Console", data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const THIRD_DATA = async () => {
//   try {
//     const response = await fetch(API_2_URL);
//     const data = await response.json();
//     console.log("Im Api Random User Data Console", data.results);
//   } catch (error) {
//     console.log(error);
//   }
// };

// TODO GETTING DATA USING SIMPLE FETCH API

// const FIRST_DATA = () => {
//   setTimeout(() => {
//     fetch(API_1_URL).then((response) => {
//       response.json().then((data) => {
//         console.log("Im Api Github User Data Console", data);
//       });
//     });
//   }, 3000);
// };

// const SECOND_DATA = () => {
//   setTimeout(() => {
//     fetch(API_2_URL).then((response) => {
//       response.json().then((data) => {
//         console.log("Im Api Random User Data Console", data.results);
//       });
//     });
//   }, 2000);
// };

// const THIRD_DATA = () => {
//   setTimeout(() => {
//     fetch(API_3_URL).then((response) => {
//       response.json().then((data) => {
//         console.log("Im Api Weather Data Console", data);

//       });
//     });
//   }, 2000);
// };

FIRST_DATA();
SECOND_DATA();
THIRD_DATA();
