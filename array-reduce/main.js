const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const add = numbers.reduce((previous, next) => previous + next);
const multiply = numbers.reduce((previous, next) => previous * next);
const balance = account.reduce((previous, next) => {
  if (next.type === 'withdrawal') {
    return previous - next.amount;
  } else {
    return previous + next.amount;
  }
}, 0);
const composite = traits.reduce((previous, next) => {
  return Object.assign(previous, next);
}, {});

console.log(add);
console.log(multiply);
console.log(balance);
console.log(composite);
