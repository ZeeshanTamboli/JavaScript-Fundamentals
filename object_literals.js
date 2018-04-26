const person = {
  firstName: 'Zeeshan',
  lastName: 'Tamboli',
  age: 22,
  email: 'z.javed.tamboli@gmail.com',
  hobbies: ['reading', 'coding'],
  address: {
    city: 'Pune',
    state: 'Mah'
  },
  getBirthYear: function() {
    return 2018 - this.age;
  }
};

let val;

val = person;
//Get specific value
val = person.firstName;
val = person['firstName'];
val = person.hobbies[1];
val = person.address.city;
val = person.getBirthYear();

console.log(val);

const people = [
  {
    name: 'John',
    age: 45
  },
  {
    name: 'Mike',
    age: 25
  }
];

people.forEach(person => console.log(person.name));
