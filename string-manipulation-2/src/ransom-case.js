/* exported ransomCase */
function ransomCase(string) {
  var result = '';
  var lowerStr = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 1) {
      result += lowerStr[i].toUpperCase();
    } else {
      result += lowerStr[i];
    }
  }
  return result;
}
