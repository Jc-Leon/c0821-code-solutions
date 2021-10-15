/* exported equal */
function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}

/*
create condition if if the length of the arrays to not match then return false
then we check if the index of the arrays do not match then return false
then we return true if they do
*/
