// console.log('Fear is the mind killer.');

// ANCHOR - Functions Lab Exercises

// SECTION Exercise #1: Write a function, 'printGreeting', with a parameter, 'name', that returns a greeting with the argument interpolated into the greeting:

// const printGreeting = (name) => {
//   console.log('Morning ' + name + '!');
// }
// printGreeting('Luna');


// SECTION Exercise #2: Write a function, 'reverseWordOrder' that accepts a single string as a parameter. The function should return a string with the order of the words reversed. Don't worry about punctuation.

// const reverseWordOrder = (inputString) => {
//   return inputString.split(' ').reverse().join(' ');
// }
// console.log(reverseWordOrder('My name is Jonathan and I am a ginger'));


// SECTION Exercise #3: Write a function, 'calculate'. The function should take three parameters, two numbers followed last by a string (num1, num2, operation). If the function is called with the third argument being 'add', it should add the two numbers. The same logic applies for 'sub', 'mult', 'div', and exp (where num2 is the exponent of num1):

// const calculate = (num1, num2, operation) => {
//   if (operation === 'add') {
//     return num1 + num2;
//   } else if (operation === 'sub') {
//     return num1 - num2;
//   } else if (operation === 'mult') {
//     return num1 * num2;
//   } else if (operation === 'div') {
//     return num1 / num2;
//   } else if (operation === 'exp') {
//     return num1 ** num2;
//   }
// }
// console.log(calculate(2, 5, 'exp'));


// SECTION Exercise #4: