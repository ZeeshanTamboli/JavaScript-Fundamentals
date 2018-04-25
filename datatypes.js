//PRIMITVE TYPES
//string
const name = 'Zeeshan';

//number
const age = 22;

//boolean
const isGraduated = true;

//null
const car = null;

//undefined
let test;

//Symbol (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
const sym = Symbol();

//Symbol example
const person1 = {
  name: 'Zeeshan',
  age: 22
};

const person2 = {
  name: 'Kunal',
  age: 22
};

console.log(Symbol(person1.age) === Symbol(person2.age)); //returns false

//REFERENCE TYPES - Objects
//array
const hobbies = ['reading', 'jogging', 'movies'];

//Object literals
const address = {
  city: 'Pune',
  state: 'Maharashtra'
};

//Dates
const today = new Date();

console.log(today);
console.log(typeof today);
