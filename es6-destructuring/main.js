const book1 = {
  title: 'Goodnight Punpun',
  author: 'Inio Asano',
  libraryID: 3353
};
const { title } = book1;
const { author } = book1;
const { libraryID } = book1;

console.log(`The title of the book is ${title}, the author ${author}, and the library id is ${libraryID}`);

const book2 = {
  title: 'Les Fleurs du mal',
  author: 'Charles Baudelaire',
  libraryID: 2345
};
const { title: bookTitle } = book2;
const { author: bookAuthor } = book2;
const { libraryID: bookNum } = book2;

console.log(`The title of the book is ${bookTitle}, the author ${bookAuthor}, and the library id is ${bookNum}`);

const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
  },
  {
    title: "Dead Dead Demon's De De De De Destruction",
    author: 'Inio Asano',
    libraryID: 1233
  }
];

const [x, y, z] = library;

console.log('book3:', x);
console.log('book4:', y);
console.log('book5:', z);

const [,,, last] = library;

console.log('book6', last);
