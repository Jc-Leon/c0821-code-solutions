const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(evens => evens % 2 === 0);
const overFive = numbers.filter(number => number > 5);
const startWithE = names.filter(E => E[0] === 'E');
const haveD = names.filter(hasD => hasD.includes('d') || hasD.includes('D'));
console.log(evenNumbers);
console.log(overFive);
console.log(startWithE);
console.log(haveD);
