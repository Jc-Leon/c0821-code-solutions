const pg = require('pg');
const express = require('express');
const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});
app.listen(3000, () => {
  console.log('Express server listening on port 3000');// eslint-disable-line
});

app.get('/api/grades/', (req, res, next) => {
  const sql = `
select *
from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});
app.use(express.json());

app.post('/api/grades/', (req, res, next) => {
  const { name, course, score } = req.body;
  if (!name || !course || !score) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (score < 0 || score > 100) {
    res.status(400).json({ error: 'enter valid integer from 0-100' });
  } else {
    const sql = `
insert into "grades" ("name","course","score")
values ($1,$2,$3)
  `;
    const params = [name, course, score];
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        res.status(201).json(grade);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred.'
        });
      });
  }
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  const { name, course, score } = req.body;
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
  } else if (!name || !course || !score) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (score < 0 || score > 100) {
    res.status(400).json({ error: 'enter valid integer from 0-100' });
  } else {
    const sql = `
update "grades"
set "name" = $1, "course" = $2, "score" = $3
where "gradeId" = $4
returning *
  `;
    const params = [name, course, score, gradeId];
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json({
            error: `Cannot find grade with "gradeId" ${gradeId}`
          });
        } else {
          res.status(200).json(grade);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred.'
        });
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
  } else {
    const sql = `
delete from "grades"
where "gradeId" = $1
returning *
  `;
    const params = [gradeId];
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json({
            error: `Cannot find grade with "gradeId" ${gradeId}`
          });
        } else {
          res.status(204).json(grade);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred.'
        });
      });
  }
});
