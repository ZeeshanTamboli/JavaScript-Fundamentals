//Creating arrays
const numbers = [23, 22, 56, 78, 45];
const numbers2 = new Array(22, 45, 87, 90, 5);
const fruit = ['Apple', 'Banana', 'Orange', 'Fig'];
const mixed = [
  'Zeeshan',
  22,
  undefined,
  null,
  true,
  { a: 1, b: 2 },
  new Date()
];

let val;

//Get array length
val = numbers.length;

//Check if is array
val = Array.isArray(numbers);

//Get single value
val = numbers[3];

//Insert into array
numbers[2] = 100;

//find index of
val = numbers.indexOf(100);

//MUTATING ARRAYS
//Add on the end
numbers.push(250);
//Add on front
numbers.unshift(120);

//Take off from end
numbers.pop();
//Take off from front
numbers.shift();

//Splice values
numbers.splice(1, 2);

//Reverse
numbers.reverse();

//Concat arrays
val = numbers.concat(numbers2);

//Sorting arrays
val = fruit.sort();

val = numbers.sort();

//Sort number array in ascending order
val = numbers.sort(function(a, b) {
  return a - b;
});

//sort number array in descending order
val = numbers.sort(function(a, b) {
  return b - a;
});

console.log(numbers);
console.log(val);
