//FOR LOOP
// for (let i = 0; i < 10; i++) {
//   //console.log(i);
//   if (i === 2) {
//     console.log('My favourite number is 2');
//     continue;
//   }
//   console.log(i);
// }

//LOOP THROUGH ARRAY
const cars = ['Honda', 'Suzuki', 'Jaguar', 'Tata'];

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

//FOREACH
// cars.forEach((car, index, array) => {
//   console.log(`${index} : ${car}`);
//   console.log(array);
// });

//MAP
// const users = [
//   {
//     id: 1,
//     name: 'Zeeshan'
//   },
//   {
//     id: 2,
//     name: 'Aditya'
//   },
//   {
//     id: 3,
//     name: 'Kunal'
//   },
//   {
//     id: 4,
//     name: 'William'
//   }
// ];

// const names = users.map(user => user.name); //map returns an array

// console.log(names);

//FOR IN LOOP(used in object literals)
const user = {
  firstName: 'Zeeshan',
  lastName: 'Tamboli',
  age: 22
};

for (let x in user) {
  console.log(`${x}: ${user[x]}`);
}
