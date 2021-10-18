/* exported reverseWords */
function reverseWords(string) {
  const sampleArr = string.split(' ');
  let sudoArr = [];
  for (let i = 0; i < sampleArr.length; i++) {
    const newString = sampleArr[i];
    let backwards = '';
    for (let j = newString.length - 1; j >= 0; j--) {
      backwards += newString[j];
    }
    sudoArr.push(backwards);
  }
  sudoArr = sudoArr.join(' ');
  return sudoArr;
}

/*
we want to split the string by each word
reverse the word and join them
which should give usthe string reversed
now we want to split the string at its empty value and reverse back and join it back together
*/
