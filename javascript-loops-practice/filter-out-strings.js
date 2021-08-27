/* exported filterOutStrings */
function filterOutStrings(values) {
  var arr = [];

  for (var i = 0; i < values.length; i++) {
    if (values[i] !== ' ') {
      arr.push(values[i]);
    }
  }
  return arr;
}
