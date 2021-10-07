const fs = require('fs');

const readfile = fs.readFileSync('data.json');
const file = JSON.parse(readfile);
const data = JSON.stringify(file.notes, null, 2);

console.log(data.split('"').join(''));
