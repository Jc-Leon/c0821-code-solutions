/* exported dropRight */
function dropRight(array, count) {
  var arr = [];
  for (var i = 0; i < array.length - count; i++) {
    arr.push(array[i]);
  }
  return arr;
}

/*
create new array literal
go through each index of the array but stop going through the array at the count
push those values into the array and return the array
*/
