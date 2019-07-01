function Transaction() {
  this._balance = 0
  this._allTransactions = []
  this._currentTransaction = {}
};

// Object.keys(account._transactions)[0]

Transaction.prototype.deposit = function(tranDate, depositAmount) {
  this._currentTransaction = {date: tranDate, amount: depositAmount, type: "credit"};
};

Transaction.prototype.withdraw = function(tranDate, withdrawAmount) {
  this._currentTransaction = {date: tranDate, amount: withdrawAmount, type: "debit"};
};

Transaction.prototype.save = function() {
  this._allTransactions.push(this._currentTransaction)
};
