/* exported chunk */
function chunk(array, size) {
  var arr = [];
  for (var i = 0; i < array.length; i += size) {
    var chonk = array.slice(i, i + size);
    arr.push(chonk);
  }
  return arr;
}
