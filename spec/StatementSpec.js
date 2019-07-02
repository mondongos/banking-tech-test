describe("Statement", function(){
  var transaction

  beforeEach(function() {
    transaction = new Transaction();
  });

  it("should display the statement", function(){
    transaction.deposit("10/01/2012", 1000);
    transaction.save();
    transaction.deposit("11/01/2012", 2000);
    transaction.save();
    var statement = new Statement(transaction._allTransactions)
    expect(statement.dataPrint()).toEqual("date || credit || debit || balance\n10/01/2012 || 1000 ||  || 1000\n11/01/2012 || 2000 ||  || 3000\n");
  });
});
