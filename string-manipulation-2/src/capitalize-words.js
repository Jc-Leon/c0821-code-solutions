/* exported capitalizeWords */
function capitalizeWords(string) {
  var str = string.toLowerCase().split(' ');
  var arr = [];
  str.forEach(string => {
    arr.push(string[0].toUpperCase() + string.slice(1));
  });
  return arr.join(' ');
}
