describe("Statement", function(){
  var statement
  var transaction

  beforeEach(function() {
    statement = new Statement();
    transaction = new Transaction();
  });

  it("should display the statement", function(){
    transaction.deposit("10/01/2012", 1000)
    transaction.save()
    expect(statement.viewStatement(transaction._transactions)).toEqual("date || credit || debit || balance \n 10/01/2012 || 1000 ||  || 1000")
  });
});
