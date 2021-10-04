/* exported union */
function union(first, second) {
  var newArr = [];
  for (var i = 0; i < first.length; i++) {
    console.log(first[i]);
    for (var j = 0; j < second.length; j++) {
      console.log(second[j]);
    }
  }
}
