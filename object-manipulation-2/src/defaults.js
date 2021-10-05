/* exported defaults */
function defaults(target, source) {
  for (var keys in source) {
    if (!target[keys] && target[keys] !== null) {
      target[keys] = source[keys];
    }
  }
}

/* create new object literal
// loop the keys in the source object
// check to see if the target contains a property of the same key and the vale of that property is not equal to null
// if the condition is truethen assign source at its properties to target at its properties
*/
