/* exported capitalizeWord */
function capitalizeWord(word) {
  var result = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  return result;
}
