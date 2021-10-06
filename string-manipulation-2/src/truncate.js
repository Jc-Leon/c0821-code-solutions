/* exported truncate */
function truncate(length, string) {
  var str = '';
  var end = length;
  if (end > string.length) {
    end = string.length;
  }
  for (var i = 0; i < end; i++) {
    str += string[i];
  }
  str += '...';
  return str;
}
// create an empty string str
// assigning the length to new var
// check if the length is greater than the length of string
// if it passes string.length is assigned to length
// check each length index
// add and assign the string at its index to the empty string
// and add an elipses to it
// return new str
