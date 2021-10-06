const add = require('./add');
const subtract = require('./subtract');
const divide = require('./divide');
const multiply = require('./multiply');

const x = parseFloat(process.argv0[2]);
const operation = parseFloat(process.argv0[3]);
const y = parseFloat(process.argv0[4]);

if (operation === 'plus') {
  console.log('result: ', add(x, y));
} else if (operation === 'subtract') {
  console.log('result: ', subtract(x, y));
} else if (operation === ' divide') {
  console.log('result: ', divide(x, y));
} else if (operation === 'times') {
  console.log('result: ', multiply(x, y));
} else {
  console.log('Not like this ');
}
