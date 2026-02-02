class BankAccount1 {
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

  callHiddenMethod(balance: number) {
    this.addBalance(balance);
  } 
}

class StudentBankAccount1 extends BankAccount1 {
  test() {
    this.userBalance;
  }
}

const mahbubVaiAccount1 = new BankAccount1(1, "Mahbub", 20);
mahbubVaiAccount1.addBalance(100);
mahbubVaiAccount1.addBalance(50);
console.log(mahbubVaiAccount1);
