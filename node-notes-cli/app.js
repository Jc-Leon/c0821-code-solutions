const fs = require('fs');
const command = process.argv.splice(2);
const file = require('./data.json');

function read() {
  for (const key in file.notes) {
    console.log(`${key}: ${file.notes[key]}`);
  }
}

function add() {
  file.notes[file.nextId] = command[1];
  file.nextId++;
  fs.writeFile('data.json', JSON.stringify(file, null, 2), 'utf8', err => {
    if (err) {
      console.error(err);
    }
  });
}

function remove() {
  if (!file.notes[command[1]]) {
    console.log(`You really think there is a ${command[1]}?`);
    return;
  }
  delete file.notes[command[1]];
  fs.writeFile('data.json', JSON.stringify(file, null, 2), 'utf8', err => {
    if (err) {
      console.error(err);
    }
  });
}

function update() {
  if (!file.notes[command[1]]) {
    console.log(`You really think there is a ${command[1]}?`);
    return;
  }
  file.notes[command[1]] = command[2];
  fs.writeFile('data.json', JSON.stringify(file, null, 2), 'utf8', err => {
    if (err) {
      console.error(err);
    }
  });
}

if (command[0] === 'read') {
  read();
} else if (command[0] === 'add') {
  add();
} else if (command[0] === 'delete') {
  remove();
} else if (command[0] === 'update') {
  update();
} else {
  console.log('Enter a valid command');
}
