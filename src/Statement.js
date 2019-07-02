function Statement(transactionHistory) {
  this._transactionHistory = transactionHistory
  this._heading = "date || credit || debit || balance\n"
};

Statement.prototype.viewStatement = function() {
  return this.dataPrint()
};

Statement.prototype.headerPrint = function() {
  return this._heading
};

Statement.prototype.dataPrint = function() {
  // for (let i = 0; i < this._transactionHistory.length; i++) {
  //   Object.values(this._transactionHistory[i])[0]
  var result = "date || credit || debit || balance\n"
  for (var i = 0; i < this._transactionHistory.length; i++) {
    result += Object.values(this._transactionHistory[i]) + "\n"
  }
  return result.replace(/,/g, " || ");
  };
