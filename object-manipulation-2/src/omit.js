/* exported omit */
function omit(source, keys) {
  var obj = {};
  var sourceKeys = Object.keys(source);

  for (var i = 0; i < sourceKeys.length; i++) {
    var keyValue = sourceKeys[i];
    if (keys.includes(keyValue) === false) {
      obj[keyValue] = source[keyValue];
    }
  }

  return obj;
}

/*
assign empty object literal to new var
create an array of keys at source and assign to new var
checked the index of the array
assign the value to new a var
check to see if source keys are included in the keys array to equal false
and if the condition passes then assign the source at its index to the new
object literal at its index
*/
