//FUNCTION DECLARATIONS

function greet(firstName = 'Zeeshan') {
  // if (typeof firstName === 'undefined') {
  //   firstName = 'Zeeshan';
  // }
  return 'Hello ' + firstName;
}
//console.log(greet());

//FUNCTION EXPRESSIONS
const square = function(x) {
  return x * x;
};
//console.log(square(8));

//IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
// (function() {
//   console.log('IFFE ran...');
// })();

// (function(name) {
//   console.log('Hello ' + name);
// })('Zee');

//PROPERTY METHODS
const todo = {
  id: 3,
  add() {
    console.log(`Add todo having id ${this.id}`);
  }
};

todo.delete = () => console.log('Delete todo...');

todo.add();
todo.delete();
