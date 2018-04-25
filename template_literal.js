const name = 'Zeeshan';
const age = 22;
const job = 'Web Developer';
const city = 'Pune';

let html;

//Without template strings (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li></ul>';

function Hello() {
  return 'Hello World!';
}

//With template strings (es6)
html = `<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${Hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
</ul>`;

document.body.innerHTML = html;
