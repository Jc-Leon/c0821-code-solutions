/* exported countdown */
function countdown(number) {
  var arr = [];
  var num = number;
  for (var i = 0; i <= number; i++) {
    arr.push(num);
    num--;
  }
  return arr;
}
