/* exported lastChars */
function lastChars(length, string) {
  var newStr = string;
  var last = newStr.substr(newStr.length - length);
  console.log(newStr);
  console.log(length);
  console.log(newStr.length);
  // console.log(length);
  // console.log(string);
  // if (length > string.length) {
  //   return string;
  // }
  // for (var i = string.length - 1; i >= length; i--) {
  //   newStr += string[i];
  //   console.log
  // }

  return last;
}
