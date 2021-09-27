/* exported take */
function take(array, count) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr.slice(0, count);
}
// shift pop splice
