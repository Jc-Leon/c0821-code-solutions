/* exported union */
function union(first, second) {
  var newArray = first.map((e, i) => second[i]);
  return newArray
  ;
}
