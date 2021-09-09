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
