const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];
const doubled = numbers.map(doubled => doubled * 2);
const prices = numbers.map(price => `$${price.toFixed(2)}`);
const upperCased = languages.map(uppercase => uppercase.toUpperCase());
const firstLetters = languages.map(first => first[0]);

console.log(doubled);
console.log(prices);
console.log(upperCased);
console.log(firstLetters);
