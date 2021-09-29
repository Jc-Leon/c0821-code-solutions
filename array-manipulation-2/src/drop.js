/* exported drop */
function drop(array, count) {
  var arr = [];
  for (var i = count; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}
/*
craete new array literal
go through each index of the array starting at the count
push those values into the array and return that array
*/
