/* exported getWords */
function getWords(string) {
  if (string.length > 0) {
    return string.split(' ');
  } else {
    return [];
  }
}
// if the length of string is less than 0
// split the empty space value of the string
// else return an empty array
