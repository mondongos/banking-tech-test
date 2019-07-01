describe("Transactions", function() {
  var transaction
  var currDate

  beforeEach(function() {
    transaction = new Transaction()
    date1 = "06-09-20"
    date2 = "07-09-20"
  });

  it("should be able to make a deposit", function() {
    transaction.deposit(date1, 1000);
    expect(transaction._balance).toEqual(1000);
  });

  it("should be able to make a withdrawal", function() {
    transaction.deposit(date1, 1000);
    transaction.withdraw(date2, 500);
    expect(transaction._balance).toEqual(500);
  });

  it("should not allow withdrawals if account has insufficient funds", function() {
    transaction.deposit(date1, 1000);
    expect(function() {
      transaction.withdraw(date2, 2000)
    }).toThrowError("Insufficent Funds");
  });

  // it("should store the amount of each transaction", function() {
  //   transaction.deposit(1000);
  //   transaction.withdraw(500);
  //   expect()
  // });
});
