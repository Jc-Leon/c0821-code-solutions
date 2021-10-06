/* exported firstChars */
function firstChars(length, string) {
  var newStr = '';
  if (length > string.length) {
    return string;
  }
  for (var i = 0; i < length; i++) {
    newStr += string[i];
  }

  return newStr;
}
/* create empty str var
write a condition if the length is less than the length of the string then return the string
check through index of length and add the empty string and assign the string at its index the empty string
then return that string
 */
