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

// create new var str
// create for loop with initialization i = 0
// with condition i < string.length
// with final expression i is incrementing by 1
// assign string at the index i to a new variable char
// create condition if index is strictly equal to the first index parameter
// then concatenate the newStr var to the string at the second index parameter
// create condition else if index is strictly equal to the second index parameter
// then concatenate the newStr var to the string at the first index parameter
