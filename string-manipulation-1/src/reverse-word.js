/* exported reverseWord */
function reverseWord(word) {
  if (word === '') { return ''; } else { return reverseWord(word.substr(1)) + word.charAt(0); }
}
