const express = require('express');
const app = express();

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
}
;

app.get('/api/grades', function (req, res) {
  const newarr = [];
  for (const property in grades) {
    newarr.push(grades[property]);
  }
  res.json(newarr);

});

app.delete('/api/grades/:id', function (req, res) {
  const id = req.params.id;
  delete grades[id];
  res.sendStatus(204);

});

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});