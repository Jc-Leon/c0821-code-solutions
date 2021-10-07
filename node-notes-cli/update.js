const fs = require('fs');
const fileName = './file.json';
const file = require(fileName);

fs.writeFile(fileName, JSON.stringify(file), err => {
  file.key++;
  if (err) return console.log(err);
  console.log(JSON.stringify(file));
});
