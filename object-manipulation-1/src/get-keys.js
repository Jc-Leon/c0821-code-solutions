/* exported getKeys */
function getKeys(object) {
  var arr = [];
  for (var key in object) {
    arr.push(key);
  }
  return arr;
}
// create var with an empty array
// createa  for in loop
// for the var key in object object
// push the key into the new arr
// then return arr from the function
