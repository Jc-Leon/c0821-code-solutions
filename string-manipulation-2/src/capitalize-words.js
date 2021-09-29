/* exported capitalizeWords */
function capitalizeWords(string) {
  var str = string.toLowerCase().split(' ');
  var arr = [];
  str.forEach(string => {
    arr.push(string[0].toUpperCase() + string.slice(1));
  });
  return arr.join(' ');
}
/*
create a new var that lower cases the string and splits the space
create an array literal to push values into
go through the each string and uppercase the first letter at its index and slice the first index leaving
everything else lowercased and push it to the array literal
and return the arr joined by the split space
*/
