/* exported isPalindromic */
function isPalindromic(string) {
  let palindrome = '';
  let str = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      str += string[i];
    }
  }
  for (let i = str.length - 1; i >= 0; i--) {
    palindrome += str[i];
  }

  return palindrome === str;
}

/*
create a for loop to get the string backwards
split each character
check if string and backwards strink matches
*/
