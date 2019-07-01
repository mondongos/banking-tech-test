describe("Bank Account", function() {

  beforeEach(function() {
    account = new Account()
  });

  it("should be able to make a deposit", function() {
    account.deposit(1000);
    expect(account._balance).toEqual(1000);
  });

  it("should be able to make a withdrawal", function() {
    account.deposit(1000);
    account.withdraw(500);
    expect(account._balance).toEqual(500);
  });

  it("should not allow withdrawals if account has insufficient funds", function(){
    account.deposit(1000);
    expect(function() {account.withdraw(2000)}).toThrowError("Insufficent Funds");
  });
  
});
