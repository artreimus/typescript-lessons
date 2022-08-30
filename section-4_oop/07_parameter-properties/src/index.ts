class Account {
  nickname?: string; // optional properties

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {} // Any easy and concise way of intiializing the properties :)

  deposit(amount: number): void {
    if (amount < 0) throw new Error('invalid ammount');
    this._balance += amount;
  }

  getBalance(): number {
    return this._balance;
  }
}

let account = new Account(1, 'Arthur', 0); // new operator is used to create an instance
account.deposit(10000);
console.log(account.getBalance);
