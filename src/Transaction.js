function Transaction() {
  this._balance = 0
  this._transactions = {}
};

// Object.keys(account._transactions)[0]

Transaction.prototype.deposit = function(date, depositAmount) {
  this._transactions[date] = depositAmount;
  this._balance+=depositAmount;
};

Transaction.prototype.withdraw = function(date, withdrawAmount) {
  if(this._balance - withdrawAmount < 0) {throw new Error("Insufficent Funds")}
  this._transactions[date] = withdrawAmount * -1;
  this._balance-=withdrawAmount
};
