import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './app.jsx';

const language = [
  {
    name: 'HyperText Markup Language',
    content: 'The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.'
  },
  {
    name: 'Cascading Style Sheets',
    content: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.'
  },
  {
    name: 'JavaScript',
    content: 'JavaScript,often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.'
  }
];

ReactDOM.render(<Accordion languages={language}/>, document.getElementById('root'));
