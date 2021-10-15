const takeAChance = require('./take-a-chance');
const promObj = takeAChance('Jc');

promObj.then(value => {
  console.log(value);
});
promObj.catch(error => {
  console.error(error.message);
});
