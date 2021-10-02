/* exported take */
function take(array, count) {
  return array.slice(0, count);
}

/*
create new array literal
for through each index of the array
push those values in the new array
then we want to slice at 0 and end at the count of the new array and return it
*/
