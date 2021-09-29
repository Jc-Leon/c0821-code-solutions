/* exported chunk */
function chunk(array, size) {
  var arr = [];
  for (var i = 0; i < array.length; i += size) {
    var chonk = array.slice(i, i + size);
    arr.push(chonk);
  }
  return arr;
}
/*
create an empty array literal to push values into
go through each index and instead of incrementing by 1 we want to assign i being added by the size
then we want to slice the array starting at where ever the index is at and add where the index is at plus the the size
push those values into the new array and return that array
*/
