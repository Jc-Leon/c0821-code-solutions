/* exported isPalindromic */
function isPalindromic(string) {
  return string === string.split('').reverse().join('');
}
