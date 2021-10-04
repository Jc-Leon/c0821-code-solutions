/* exported intersection */
function intersection(first, second) {
  var newArr = [];
  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        newArr.push(first[i]);
      }
    }
  }
  return newArr;
}

/*
create an array literal
loop through the first array, and the 2nd array
compare the values and return the matching index to the new array
*/
