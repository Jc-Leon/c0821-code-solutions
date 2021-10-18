import React from 'react';
import ReactDOM from 'react-dom';

const word = React.createElement(
  'h1',
  null,
  'Hello, React!'
);
ReactDOM.render(word, document.getElementById('root'));
