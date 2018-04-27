const id = 100;

if (id !== 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// '==' checks only value, '===' checks type and value

//Test if undefined
if (typeof id !== 'undefined') {
  console.log(`The ID is : ${id}`);
} else {
  console.log('No ID');
}

//TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');
