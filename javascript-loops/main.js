/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log(getNumbersToTen());

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log(getEvenNumbersToTwenty());

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}
console.log(repeatWord('javascript,', 30));

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) console.log(string[i]);
}
console.log(logEachCharacter('javacript'));

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log(doubleAll([5, 7, 9, 11]));

var bookshelf = {
  isbn: '978-1491929483',
  title:
    'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
  author: 'Lindsay Bassett'
};

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
console.log(getKeys(bookshelf));

function getValues(object) {
  var values = [];
  for (var value in object) {
    values.push(object[value]);
  }
  return values;
}

console.log(getValues(bookshelf));
