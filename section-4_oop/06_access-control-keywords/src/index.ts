class Account {
  readonly id: number;
  owner: string;
  private _balance: number;
  nickname?: string; // optional properties
  transaction: Transaction[];

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  deposit(amount: number): void {
    if (amount < 0) throw new Error('invalid ammount');
    this._balance += amount;
  }

  private calculateTax() {}

  getBalance(): number {
    return this._balance;
  }
}

let account = new Account(1, 'Arthur', 0); // new operator is used to create an instance
account.deposit(10000);
console.log(account.getBalance);
