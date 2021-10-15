/* exported flatten */
function flatten(array) {
  var newarr = [];
  for (var i = 0; i < array.length; i++) {
    var value = array[i];
    if (Array.isArray(value)) {
      for (var j = 0; j < value.length; j++) {
        newarr.push(value[j]);
      }
    } else {
      newarr.push(value);
    }
  }
  return newarr;
}

/*
create an array literal
loop through the array to get the indexes
create a condition that if the index is array within the original array then
loop through the index array to get the values of the indexed array
and push the values into the new array literal
else if the array is not in an array then push those values to the new array
*/
