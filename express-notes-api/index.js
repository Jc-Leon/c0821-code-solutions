const express = require('express');
const app = express();
const file = require('./data.json');
const fs = require('fs');

app.listen(3000, () => {
  console.log('Express server listening on port 3000');// eslint-disable-line
});

app.get('/api/notes', function (req, res) {
  const newarr = [];
  for (const property in file.notes) {
    newarr.push(file.notes[property]);
  }
  res.json(newarr);

});

app.get('/api/notes/:id', function (req, res) {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ error: 'id must be a valid integer' });
  } else if (file.notes[id] === undefined) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    res.json(file.notes[id]);
  }
});
app.use(express.json());

app.post('/api/notes', (req, res) => {
  const obj = req.body;
  console.log('obj', obj);
  console.log('file.nextId', file.nextId);
  console.log(obj.id);
  console.log(file.notes[file.nextId]);
  if (JSON.stringify(obj) === JSON.stringify({})) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    obj.id = file.nextId;
    file.notes[file.nextId] = obj;
    file.nextId++;
    res.status(201).json(obj);
    fs.writeFile('data.json', JSON.stringify(file, null, 2), 'utf8', err => {
      if (err) {
        console.error(err);
      }
    });
  }

});
