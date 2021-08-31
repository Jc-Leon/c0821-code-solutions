/* exported initial */
function initial(array) {
  var arr = [];
  for (var i = 0; i < array.length - 1; i++) {
    arr.push(array[i]);
  }
  return arr;
}
// create a new arr as an empty array
// create for loop with initialization var i is = 0
// with the condition if i is less than the array at the last indexed
// with final expression i being incremented by 1
// then push the array at its index to the new arr
// then return the new arr from the function
