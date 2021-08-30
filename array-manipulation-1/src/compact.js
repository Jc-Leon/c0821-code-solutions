/* exported compact */
function compact(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      arr.push(array[i]);
    }
  }
  return arr;
}
// create new array
// create for loop with the intialization var i is = to 0
// with condition i is less than the length of the array
// with the final expression i is incrementing by 1
// create condition if the array is at i
// then push the array at i index to the new arr
// then return arr from the function
