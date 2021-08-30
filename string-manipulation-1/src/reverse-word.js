/* exported reverseWord */
function reverseWord(word) {
  var str = '';
  for (var i = word.length - 1; i >= 0; i--) {
    str += word[i];
  }
  return str;
}
// create a var thatll hold new String
// create a for loop initialzation i is = to word length
// with condition i is less than or equal to 0
// with final expression that i is decremeting
// add str to word at its index and assign the value to str
// return str
