/* exported ransomCase */
function ransomCase(string) {
  var result = '';
  var lowerStr = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 1) {
      result += lowerStr[i].toUpperCase();
    } else {
      result += lowerStr[i];
    }
  }
  return result;
}
/*
create an empty string and assign to new var
lowercase the entire string and assign it to a new var
go through each index of the string
make a condition if the index is even then add the empty string to the
lowercase string and uppercase its even index and assign to to the empty string varr
else add the empty str var to the lower cased string at its index and assign it to the empty str var
return that resule
*/
