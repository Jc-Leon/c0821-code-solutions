/* exported unique */
function unique(array) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (!newArr.includes(array[i])) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
/*
create a new array literal
loop through array and create condtion
if there a value not already in there then push that value in the new array
then we return the new array
*/
