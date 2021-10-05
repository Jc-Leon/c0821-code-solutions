/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount <= 0 || !Number.isInteger(amount)) {
    return false;
  } else {
    var newTransaction = new Transaction('deposit', amount);
    this.transactions.push(newTransaction);
    return true;
  }
};

Account.prototype.withdraw = function (amount) {
  if (amount <= 0 || !Number.isInteger(amount)) {
    return false;
  } else {
    var newTransaction = new Transaction('withdrawal', amount);
    this.transactions.push(newTransaction);
    return true;
  }
};

Account.prototype.getBalance = function () {
  var balance = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    var transaction = this.transactions[i];

    if (transaction.type === 'deposit') {
      balance += transaction.amount;
    } else if (transaction.type === 'withdrawal') {
      balance -= transaction.amount;
    }
  }
  return balance;
};
