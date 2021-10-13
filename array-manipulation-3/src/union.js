/* exported union */
function union(first, second) {
  const newArr = [];
  for (let i = 0; i < first.length; i++) {
    newArr.push(first[i]);
  }
  for (let i = 0; i < second.length; i++) {
    if (!newArr.includes(second[i])) {
      newArr.push(second[i]);
    }
  }
  return newArr;
}
/*
loop through the first array and push those values in a new array literal
use another loop for the second array and make a condtion
if there a value not already in there then push that value in the new array
then we return the new array
*/
