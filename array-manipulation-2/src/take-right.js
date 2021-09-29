/* exported takeRight */
function takeRight(array, count) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr.slice(-count);
}

/*
create array literal
go through each index of the array push those values into an array
get the end of the array and return the array
*/
