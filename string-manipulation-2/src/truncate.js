/* exported truncate */
function truncate(length, string) {
  var str = '';
  var end = length;
  if (end > string.length) {
    end = string.length;
  }
  for (var i = 0; i < end; i++) {
    str += string[i];
  }
  str += '...';
  return str;
}
// creating an empty string str
// assigning the parameter length to new var end
// with condtion if the end var is greater than the length of parameter string
// then string.length is being resasigned to end var
// create for loop with an initilization of var i =0 with the condition that i is less than the end var
// with the final expression of i being incremented by 1
// concatentanate str with string at i
// then concatentanate str with "..."
// return new str
