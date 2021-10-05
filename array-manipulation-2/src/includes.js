/* exported includes */
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
/*
go through each index of the array
make a condtion if the value of i is equal the whatever the value is then return true
if not then return false
*/
