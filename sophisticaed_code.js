/* sophisticaed_code.js */ 

// This code demonstrates a complex banking system for managing customer accounts and transactions

class Customer {
  constructor(id, name, address, email, phone) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.accounts = [];
  }

  addAccount(account) {
    this.accounts.push(account);
  }

  getAccount(accountNumber) {
    return this.accounts.find(account => account.number === accountNumber);
  }
}

class Account {
  constructor(number, type, balance = 0) {
    this.number = number;
    this.type = type;
    this.balance = balance;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push({ type: "Deposit", amount, date: new Date() });
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.transactions.push({ type: "Withdrawal", amount, date: new Date() });
    } else {
      console.log("Insufficient balance.");
    }
  }

  printStatement() {
    console.log(`Account Number: ${this.number}`);
    console.log(`Type: ${this.type}`);
    console.log(`Balance: $${this.balance.toFixed(2)}`);
    console.log("Transactions:");
    this.transactions.forEach(transaction => {
      console.log(`${transaction.type} of $${transaction.amount} on ${transaction.date}`);
    });
  }
}

// Creating sample customer and accounts
const customer1 = new Customer(1, "John Doe", "123 Main St", "john@example.com", "555-123-456");
const savingsAccount = new Account("SAV-001", "Savings");
const checkingAccount = new Account("CHK-001", "Checking");

customer1.addAccount(savingsAccount);
customer1.addAccount(checkingAccount);

savingsAccount.deposit(1000);
savingsAccount.withdraw(200);
savingsAccount.deposit(500);
checkingAccount.deposit(2000);
checkingAccount.withdraw(100);

console.log("Customer Details:");
console.log(`Name: ${customer1.name}`);
console.log(`Email: ${customer1.email}`);
console.log(`Phone: ${customer1.phone}`);

console.log("\nAccount Details:");
customer1.accounts.forEach(account => {
  account.printStatement();
  console.log("---------------------");
});