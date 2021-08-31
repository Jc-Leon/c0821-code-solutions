/* exported toObject */
function toObject(keyValuePair) {
  var obj = {};
  var key = keyValuePair[0];
  var value = keyValuePair[1];

  obj[key] = value;
  return obj;
}
// create new obj
// create and assign the first element of keyValuePair to key
// create and assign the secind element of keyValuePair to value
// assign value to obj at key
// return obj
