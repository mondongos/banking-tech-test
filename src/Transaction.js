function Transaction() {
  this._balance = 0
  this._allTransactions = []
  this._currentTransaction = {}
};

Transaction.prototype.deposit = function(tranDate, depositAmount) {
  this._balance += depositAmount
  this._currentTransaction = {date: tranDate, credit: depositAmount, debit: null, balance: this._balance};
};

Transaction.prototype.withdraw = function(tranDate, withdrawAmount) {
  this._balance -= withdrawAmount
  this._currentTransaction = {date: tranDate, credit: null, debit: withdrawAmount, balance: this._balance};
};

Transaction.prototype.save = function() {
  this._allTransactions.push(this._currentTransaction)
};
