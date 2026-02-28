function BankAccount(owner, balance) {
    this.owner = owner;
    this.balance = balance;

    this.deposit = function(amount) {
        this.balance += amount;
        return this.balance;
    };
}

const acc = new BankAccount("Siri", 5000);
console.log(acc.deposit(1000));