/* exported isVowel */
function isVowel(character) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (var i = 0; i < vowels.length; i++) {
    if (character === vowels[i]) {
      return true;
    }
  }
  return false;
}
// create an array with vowels as its arugements
// create a for loop to loop through the length of the vowels array
// create condition if the character is strictly to vowels at its index
// return true
// if not return false
