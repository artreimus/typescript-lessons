class Account {
  readonly id: number;
  readonly owner: string;
  balance: number;
  nickname?: string; // optional properties

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount < 0) throw new Error('invalid ammount');
    this.balance += amount;
  }
}

let account = new Account(1, 'Arthur', 0); // new operator is used to create an instance
account.deposit(10000);
console.log(account instanceof Account);
