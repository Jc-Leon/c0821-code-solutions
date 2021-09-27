/* exported takeRight */
function takeRight(array, count) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr.slice(-count);
}
