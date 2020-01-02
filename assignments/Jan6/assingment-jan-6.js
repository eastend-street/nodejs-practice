// a) Create an arrow function named “mySum”
const mySum = (...args) => {
  let base = 0;

  for (i in args) {
    base = base + args[i];
  }
  return base;
};
const nums = [1, 2, 3, 4];
console.log(mySum(...nums));

// b) Put this function in a different module and export it.
// →See module folder

// c) Create an array of numbers named “myArr”
const myArr = [1, 2, 3, 4];

// d) Call your function passing as arguments the members of myArr array using the
// SPREAD operator. Assign the result to a “result” variable and console log it.
console.log(mySum(...myArr));

// e) Create a new array named “mySecondArr”. Map the contents of your myArr array to
// mySecondArr array using an anonymous function that multiplies each member of
// myArr by 2.

const mySecondArr = myArr.map(num => num * 2);

// f) Filter the contents of your mySecondArr using an anonymous function that console
// logs the numbers above average number (you’ll need to find the average first).
const average = mySum(...mySecondArr) / mySecondArr.length;
console.log(mySecondArr.filter(num => num > average));

// g) Use setTimeout() function. Pass it a callback function as parameter that console logs
// “Goodbye” after 3 seconds.


// h) Create an “Employee” object that has the following key-value pairs: “name”,
// “email”, “department” and “startDate”.
// i) Destructure your object to create a new object, called “Person”, that only has name
// and email keys (and the corresponding values).
