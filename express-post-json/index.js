const express = require('express');
const app = express();

let nextID = 1;

const grades = {};
app.get('/api/grades', (req, res) => {
  const newarr = [];
  for (const property in grades) {
    newarr.push(grades[property]);
  }
  res.json(newarr);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const obj = req.body;
  const id = nextID++;
  obj.id = id;
  grades[id] = obj;
  res.status(201).json(obj);
});

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
