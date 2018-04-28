//WINDOW METHOD / OBJECTS / PROPERTIES

//Alert
// alert('Hello World!');

// prompt();

//Confirm
// if (confirm('Are you sure?')) {
//   console.log('YES');
// } else {
//   console.log('NO');
// }

let val;

//Outer height and width
val = window.outerHeight;
val = window.outerWidth;

//Inner height and width
val = window.innerHeight;
val = window.innerWidth;

//Location object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

//Redirect
//window.location.href = 'http://google.com';
//Reload
//window.location.reload();

//History object
//window.history.go();
//val = window.history.length;

//Navigator Object
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);
