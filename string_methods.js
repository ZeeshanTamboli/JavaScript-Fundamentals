const firstName = 'Zeeshan';
const lastName = 'Tamboli';
const str = 'Hello there my name is Zeeshan';
const tags = 'web design, web development, programming';

let val;

val = firstName + lastName;

//Concatenation
val = firstName + ' ' + lastName;

//Append
val = 'Zeeshan ';
val += 'Tamboli';

//Escaping
val = "That's awesome, I can't wait";

//length
val = firstName.length;

//concat()
val = firstName.concat(' ', lastName);

//Change case
val = firstName.toUpperCase();
val = lastName.toLowerCase();

val = firstName[3];

//indexOf
val = firstName.indexOf('e');
val = firstName.lastIndexOf('e');

//charAt()
val = firstName.charAt('4');

//Get last character of a string
val = firstName.charAt(firstName.length - 1);

//substring()
val = firstName.substring(0, 3);

//slice()
val = firstName.slice(3, 7);
val = firstName.slice(-3);

//split()
val = str.split(' ');
val = tags.split(', ');

//replace()
val = str.replace('Zeeshan', 'Kunal');

//includes()
val = str.includes('Hello'); //returns boolean

console.log(val);
