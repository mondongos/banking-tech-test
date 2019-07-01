describe("Transactions", function() {
  var transaction
  var currDate

  beforeEach(function() {
    transaction = new Transaction()
    date1 = "06-09-20"
    date2 = "07-09-20"
  });

  it("deposit should be stored in currentTransaction", function() {
    transaction.deposit(date1, 1000);
    expect(transaction._currentTransaction).toEqual({date: date1, amount: 1000, type: "credit"});
  });

  it("withdrawal should be stored in currentTransaction", function() {
    transaction.withdraw(date1, 500);
    expect(transaction._currentTransaction).toEqual({date: date1, amount: 500, type: "debit"});
    });

  it("transactions can be saved to allTransactions", function() {
    transaction.deposit(date1, 1000);
    transaction.save();
    transaction.withdraw(date2, 500);
    transaction.save();
    expect(transaction._allTransactions).toEqual([{date: date1, amount: 1000, type: "credit"}, {date: date2, amount: 500, type: "debit"}]);
    });
  });
