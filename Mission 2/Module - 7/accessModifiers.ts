class BankAccount {
  readonly userId: number; // readOnly means we can't change the value
  userName: string;
  //   private userBalance: number;
  protected userBalance: number; // if we use protected we can use it another class

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  addBalance(balance: number) {
    this.userBalance += balance;
  }
}

class StudentBankAccount extends BankAccount {
  test() {
    this.userBalance;
  }
}

const mahbubVaiAccount = new BankAccount(1, "Mahbub", 20);
mahbubVaiAccount.addBalance(100);
mahbubVaiAccount.addBalance(50);
console.log(mahbubVaiAccount);
