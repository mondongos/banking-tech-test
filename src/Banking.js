function Account() {
  this._balance = 0
};

Account.prototype.deposit = function(depositAmount) {
  this._balance+=depositAmount;
};

Account.prototype.withdraw = function(withdrawAmount) {
  if(this._balance - withdrawAmount < 0) {throw new Error("Insufficent Funds")}
  this._balance-=withdrawAmount
};
