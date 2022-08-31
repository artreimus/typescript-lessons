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
let bankAccount;
//# sourceMappingURL=index.js.map