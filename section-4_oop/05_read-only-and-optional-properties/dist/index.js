"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount < 0)
            throw new Error('invalid ammount');
        this.balance += amount;
    }
}
let account = new Account(1, 'Arthur', 0);
account.deposit(10000);
console.log(account instanceof Account);
//# sourceMappingURL=index.js.map