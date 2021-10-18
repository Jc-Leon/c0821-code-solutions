/* exported titleCase */
function titleCase(string) {
  let sentence = string.toLowerCase().split(' ');
  const small = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].toLowerCase() === 'javascript:') {
      sentence[i] = 'JavaScript:';
    } else if (sentence[i].toLowerCase() === 'javascript') {
      sentence[i] = 'JavaScript';
    } else if (small.includes(sentence[i])) {
      sentence[i].toLowerCase();
    } else if (sentence[i] === 'api') {
      sentence[i] = sentence[i].toUpperCase();
    } else {
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    if (sentence[i].includes(':')) {
      sentence[i + 1] = sentence[i + 1][0].toUpperCase() + sentence[i + 1].substring(1);
    }
    if (sentence[i].includes('-')) {
      let word = sentence[i].split('-');
      word[1] = word[1][0].toUpperCase() + word[1].substring(1);
      word = word.join('-');
      sentence[i] = word;
    }
  }
  sentence[0] = sentence[0][0].toUpperCase() + sentence[0].substring(1);
  sentence = sentence.join(' ');
  return sentence;
}

/*
lowercase string and split the string bu its space
create multiple conditions to make sure title matches apppropriate titlecase
create array of word to keep lowercased when creating conditions
have first letter of the title always be capitalized
join the string back together
return the string
*/
