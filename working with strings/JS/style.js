let x;

const name = "Ben";
const age = 34;

// Template literal example
x = `My name is ${name} and I am ${age} years old.`

// string Properties and methods

const s = "Hello World";
x = s.length; // string property example
x = s.toUpperCase(); // string method example
x = s.toLowerCase(); // another string method example
x = s.includes("World"); // string method to check if substring exists
x = s.indexOf("World"); // string method to get the index of a substring
x = s.slice(0, 5); // string method to extract a part of the string

console.log(x);