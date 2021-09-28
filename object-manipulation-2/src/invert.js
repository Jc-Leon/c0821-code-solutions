/* exported invert */
function invert(source) {
  var obj = {};
  for (var keys in source) {
    obj[source[keys]] = keys;
  }
  return obj;
}
/*
create new object literal
loop the keys in the source object
then assign properties of value of the source at keys to the new object literal
then assign the key to the value of the new object key
*/
