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


// SECTION Exercise #4: Write a function, 'checkIfPandigital', that takes a single number as a parameter (num), and returns true/false (boolean) if the number if pandigital:

// NOTE Check if example below (https://www.tutorialspoint.com/javascript-checking-for-pandigital-numbers) can be re-written to work with numbers instead of strings that contain numbers. Specifically, change the parameters and legend to numbers datatype, and see if you can find an alternative to the (legend.indexOf()) method that works on number datatypes:

  // NOTE Second for loop (below) was not working because I forgot to convert the numbers to strings in the first for loop (above). I was then trying to use the .includes() method to match strings to numbers in the legend's array.

// const checkIfPandigital = (num1) => {
//   let legend = [];
//   const numString = num1.toString();
//   for (let i = 1; i < numString.length + 1; i++) {
//     legend.push(i.toString())
//   }
//   for (let i = 0; i < numString.length; i++) {
//     if (!legend.includes(numString[i])) {
//       continue;
//     }
//     legend.splice(legend.indexOf(numString[i]), 1);
//   }
//   return !legend.length;
// }
// console.log(checkIfPandigital(15243));
// console.log(checkIfPandigital(13245));
// console.log(checkIfPandigital(132457));


