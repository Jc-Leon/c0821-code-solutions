/* exported getValues */
function getValues(object) {
  var arr = [];
  for (var key in object) {
    arr.push(object[key]);
  }
  return arr;
}
// create a new var with an empty array
// create a for in loop
// for var in key in object object
// push the object at the key to the new arr
// return the new arr from the function
