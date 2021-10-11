const express = require('express');
const app = express();
const file = require('./data.json');

app.get('/api/notes', function (req, res) {
  const newarr = [];
  for (const property in file.notes) {
    newarr.push(file.notes[property]);
  }
  console.log(newarr);
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
  console.log(obj);
  console.log(file);
  console.log(file.notes);
  file.notes = obj;
  console.log(obj);
  res.status(201).json(obj);
});

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
