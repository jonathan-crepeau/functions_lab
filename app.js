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

// TODO Action #1: Check if example below (https://www.tutorialspoint.com/javascript-checking-for-pandigital-numbers) can be re-written to work with numbers instead of strings that contain numbers. Specifically, change the parameters and legend to numbers datatype, and see if you can find an alternative to the (legend.indexOf()) method that works on number datatypes.\

// TODO Action #2: Rewrite in my own language.

// const numStr1 = '47458892414';
// const numStr2 = '53657687691428890';
// const isPandigital = numStr => {
//    let legend = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//    for(let i = 0; i < numStr.length; i++){
//       if(!legend.includes(numStr[i])){
//          continue;
//       };
//       legend.splice(legend.indexOf(numStr[i]), 1);
//    };
//    return !legend.length;
// };
// console.log(isPandigital(numStr1));
// console.log(isPandigital(numStr2));

// TODO How to use for loop to iterate through number datatype provided as argument.
// NOTE For now, cannot do above -- uses .map and .forEach methods that I don't have time to get into this morning.

// TODO Create for loop that turns provided number datatype (argument) into string.

const num1 = 877382;
const num2 = 918273645;
const num3 = 43521;

// TODO - Populate legend with appropriate amount of string numbers (if five-digit long number provided that's turned into string, 1-5 in legend, etc.):


// const populateLegend = (inputNum) => {
//   const legend = [];
//   const numString = inputNum.toString();
//   for (let i = 1; i < numString.length + 1; i++) {
//     legend.push(i);
//   }
//   console.log(legend);
//   console.log(typeof legend);
//   for (let i = 0; i < numString.length; i++) {
//     if (!legend.includes(numString[i])) {
//       console.log('nope!');
//     }
//     console.log('yep');
//   }
//   return !legend.length;
// }
// console.log(populateLegend(num3));



// const isPan = (num) => {
//   let legend = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
//   const numString = num.toString();
//   for (let i = 0; i < numString.length; i++) {
//     if (!legend.includes(numString[i])) {
//       continue;
//     }
//     legend.splice(legend.indexOf(numString[i]), 1);
//   }
//   return !legend.length;
// }
// console.log(isPan(num1));
// console.log(isPan(num2));
// console.log(isPan(num3));



// REVIEW Workshop Area -- I think maybe the issue of having legend with two for loops in the same function is a matter of scope?

// let stockedArray = ['1', '2', '3', '4', '5'];

// numberString = '12345';
// for (let i = 0; i < numberString.length; i++) {
//   if (stockedArray.includes(numberString[i])) {
//     stockedArray.splice(stockedArray.indexOf(numberString[i]), 1);
//   }
// }
// console.log(stockedArray);
// console.log(!stockedArray.length);