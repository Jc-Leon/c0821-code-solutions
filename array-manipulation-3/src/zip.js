/* exported zip */
function zip(first, second) {
  let newArr = [];
  const newNewArr = [];
  for (let i = 0; i < first.length && i < second.length; i++) {
    newArr.push(first[i]);
    newArr.push(second[i]);
    newNewArr.push(newArr);
    newArr = [];
  }
  return newNewArr;
}
/*
go through first and second array and push those values
to a new array to be pushed into a new new array
once counter increases then reassign the new array to an array literal
then return the new array after the loop
*/
