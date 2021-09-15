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
  if (number <= 0 || Number.isInteger(number)) {
    return null;
  } else {
    return this.accounts;
  }
};

Bank.prototype.getTotalAssets = function () {

};
