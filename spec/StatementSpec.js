describe("Balance", function(){
  var statement
  var transaction

  beforeEach(function() {
    statement = new Statement()
    transaction = new Transaction()
  });

  it("should display the statement", function(){
    transaction.deposit("10/01/2012", 1000)
    console.log(transaction._transactions)
    console.log(statement.viewStatement(transaction._transactions))
    expect(statement.viewStatement(transaction._transactions)).toEqual("date || credit || debit || balance \n 10/01/2012 || 1000 ||  || 1000")
  });
});
