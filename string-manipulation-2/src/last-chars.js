/* exported lastChars */
function lastChars(length, string) {
  var last = string.substr(-length);
  return last;
}
/*
grab the end of the string using substr and use the negative value
to grab the last chars and assign the a new var and return it
*/
