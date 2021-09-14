/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (numbers) {
    var sumAll = 0;
    for (var i = 0; i < numbers.length; i++) {
      var index = numbers[i];
      sumAll += index;
    }
    return sumAll;
  },
  getAverage: function (numbers) {
    var sumAll = 0;
    for (var i = 0; i < numbers.length; i++) {
      var length = numbers.length;
      var index = numbers[i];
      sumAll += index;
    }
    return sumAll / length;
  }
};
