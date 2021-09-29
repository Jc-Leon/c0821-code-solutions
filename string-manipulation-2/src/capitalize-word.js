/* exported capitalizeWord */
function capitalizeWord(word) {
  var result = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  return result;
}

/*
get the word at its first index and uppercase it then add it to the lowercased word
that is sliced at 1 and assign that to a new var
create condition if the lower cased word is equal to javascript then return the proper way to spell JavaScript
return that var
*/
