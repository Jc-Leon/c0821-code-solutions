/* exported reverse */
function reverse(array) {
  var arr = [];
  for (var i = array.length - 1; i >= 0; i--) {
    arr.push(array[i]);
  }
  return arr;
}
// create var with an empty array
// create for loop with initialization var i equal to last element of the indexedDB
// with the condition i is less than or equal to 0
// with final expresstion that i is decremetning
// then push the array at its index to the new arr
// then return arr from the function
