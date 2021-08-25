function convertMinutesToSeconds(minutes) {
  var seconds = 60;
  return seconds * minutes;
}
console.log(convertMinutesToSeconds(5));

function greet(name) {
  var greeting = 'Hey, ';
  return greeting + name;
}
console.log(greet('Beavis'));

function getArea(width, height) {
  return width * height;
}
console.log(getArea(17, 42));

function getFirstName(person) {

  return person.firstName;
}
console.log(getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}
console.log(getLastElement(['propane', 'and', 'propane', 'accessories']));
