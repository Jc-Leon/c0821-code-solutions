const express = require('express');
const path = require('path');
const app = express();

const directory = path.join(__dirname, 'public');
const middle = express.static(directory);

app.use(middle);
app.listen(3000, () => {
  console.log('Express server listening on port 3000');// eslint-disable-line
});
