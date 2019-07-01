function Statement(transactionHistory) {
  this._transactionHistory = transactionHistory
  this._heading = "date || credit || debit || balance\n"
};

Statement.prototype.viewStatement = function() {
  // for(let i = 0; i < this._transactionHistory.length; i++) {
  //
  //   Object.values(this._transactionHistory[i])[0]
  // }
};

Statement.prototype.headerPrint = function() {
  

}
