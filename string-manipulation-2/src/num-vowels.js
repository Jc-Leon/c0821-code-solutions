/* exported numVowels */
function numVowels(string) {
  var totalVowels = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (var char of string) {
    if (vowels.includes(char)) {
      totalVowels++;
    }
  }
  return totalVowels;
}
/*
have a counter start at 0
create a array of vowels
loop through values of string
and make a condition if there are vowels in the string
then increment the counter by 1
and return the counter
*/
