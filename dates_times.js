let val;

const today = new Date();
let birthday = new Date('09-15-1995 07:05:00'); //MM-DD-YYYY
birthday = new Date('September 15 1995');
birthday = new Date('9/15/1995');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setSeconds(61);

console.log(birthday);
