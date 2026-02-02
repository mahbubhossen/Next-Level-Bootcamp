class BankAccount2 {
  readonly userId: number;
  userName: string;
  private userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  //   // set the balance
  //   addBalance(balance: number) {
  //     return this.userBalance += balance;
  //   }

  // use setter
  set addBalance(balance: number) {
    this.userBalance += balance;
  }

  //   // get balance
  //   getBalance() {
  //     return this.userBalance;
  //   }

  // getter use
  get getBalance() {
    return this.userBalance;
  }
}

const mahbubVaiAccount2 = new BankAccount2(1, "Mahbub", 20);
// mahbubVaiAccount2.addBalance(100);
// mahbubVaiAccount2.addBalance(60);
// console.log(mahbubVaiAccount2.getBalance());

mahbubVaiAccount2.addBalance = 100;
mahbubVaiAccount2.addBalance = 60;
console.log(mahbubVaiAccount2);

console.log(mahbubVaiAccount2.getBalance);
