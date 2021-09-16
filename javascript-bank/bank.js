/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}
Bank.prototype.openAccount = function (holder, balance) {
  if (balance <= 0 || !Number.isInteger(balance)) {
    return null;
  }
  var accNum = this.nextAccountNumber;
  var newAcc = new Account(this.nextAccountNumber, holder);
  newAcc.deposit(balance);
  this.accounts.push(newAcc);
  this.nextAccountNumber++;
  return accNum;
};
Bank.prototype.getAccount = function (number) {
  if (number <= 0 || !Number.isInteger(number)) {
    return null;
  }
  for (var i = 0; i < this.accounts.length; i++) {
    var acc = this.accounts[i];
    if (number === acc.number) {
      return acc;
    }
  }
  return null;
};
Bank.prototype.getTotalAssets = function () {
  var total = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    var acc = this.accounts[i];
    total += acc.getBalance();
  }
  return total;
};
