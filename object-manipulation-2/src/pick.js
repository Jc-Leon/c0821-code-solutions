/* exported pick */
function pick(source, keys) {
  var obj = {};
  for (var i = 0; i < keys.length; i++) {
    var keyValue = keys[i];
    if (source[keyValue] !== undefined) {
      obj[keyValue] = source[keyValue];
    }
  }

  return obj;
}
/* create a new object literal
checked every key at its index and grabbed the value
and assign the value to new var named keyValue
check to see if the source object at the keyValue is not equal to undefined
if the condition is true then assign the source object at its keyvalue to the
new obj at its keyvalue
*/
