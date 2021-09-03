var bookshelf = [
  {
    isbn: '978-1491929483',
    title:
      'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett'
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson'
  },
  {
    isbn: '978-0692232699',
    title:
      "Build APIs You Won't Hate: Everyone and their dog wants an API, so you should probably learn how to build them",
    author: 'Phil Sturgeon & Laura Bohill'
  }
];
console.log('bookshelf:', bookshelf);
console.log('typeof bookshelf:', typeof bookshelf);

console.log('JSON.stringify(bookshelf):', JSON.stringify(bookshelf));
console.log('typeof JSON.stringify(bookshelf): ', typeof JSON.stringify(bookshelf));

var schoolInfo = '{"firstName": "Jc", "lastName": "Leon", "ID": 193710}';

console.log('schoolInfo: ', schoolInfo);
console.log('typeof schoolInfo: ', typeof schoolInfo);

console.log('JSON.parse(schoolInfo): ', JSON.parse(schoolInfo));
console.log('typeof JSON.parse(schoolInfo): ', typeof JSON.parse(schoolInfo));
