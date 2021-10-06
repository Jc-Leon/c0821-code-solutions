/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var newStr = '';
  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    if (i === firstIndex) {
      newStr += string[secondIndex];
    } else if (i === secondIndex) {
      newStr += string[firstIndex];
    } else {
      newStr += char;
    }
  }
  return newStr;
}

/* create emptry string var
check each index of the length of the string
make condtion if index equals first index then assign that to the secondindex
and do the same thing vice versa else return the index to the new string
return the new str
*/
