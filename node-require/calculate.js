const add = require('./add');
const subtract = require('./subtract');
const divide = require('./divide');
const multiply = require('./multiply');

const x = parseInt(process.argv[2]);
const operator = process.argv[3];
const y = parseInt(process.argv[4]);

if (operator === 'plus') {
  console.log('result: ', add(x, y));
} else if (operator === 'subtract') {
  console.log('result: ', subtract(x, y));
} else if (operator === 'times') {
  console.log('result: ', multiply(x, y));
} else if (operator === 'divide') {
  console.log('result: ', divide(x, y));
}
