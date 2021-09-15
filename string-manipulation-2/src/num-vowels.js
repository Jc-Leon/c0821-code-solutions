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
