/* exported tail */
function tail(array) {
  var arr = [];
  for (var i = 1; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}
// create new arr with empty array
// create for loop with intialization var i is equal to 1
// with condtion i is les than the length of the array
// with final expression i is incrementing by 1
// then push the array at its index to the new array
// return the array from the function
