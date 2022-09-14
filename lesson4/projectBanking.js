function makeBank() {
  let accountNumber = 101;
  let accounts = [];

  function makeAccount(number) {
    let balance = 0;
    let transactions = [];
    return {
      displayBalance() {
        console.log(balance);
      },
      deposit(amount) {
        balance += amount;
        transactions.push({type: "deposit", amount: amount})
        return balance;
      },
      withdraw(amount) {
        if (balance < amount) amount = balance;
        balance -= amount;
        transactions.push({type: "withdraw", amount: amount})
        return amount;
      },
      displayNumber() {
        return number;
      },
      displayTransactions() {
        return transactions;
      }
    }
  }

  return {
    openAccount() {
      let account = makeAccount(accountNumber);
      accountNumber += 1;
      accounts.push(account);
      return account;
    },
    transfer(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    },
  }
}

let bank = makeBank();

let account = bank.openAccount();
console.log(account.displayNumber());
// console.log(bank.accounts);
let secondAccount = bank.openAccount();
console.log(secondAccount.displayNumber());
// console.log(bank.accounts);
account.deposit(10);
bank.transfer(account, secondAccount, 18);
account.displayBalance();
secondAccount.displayBalance();
// bank.accounts;

// let account = makeAccount();
// let otherAccount = makeAccount();
//
// console.log(bank.accounts)
//
// account.deposit(100);
// account.displayBalance();
// account.withdraw(19);
// account.displayBalance();
// account.withdraw(91);
// account.displayBalance();
// console.log(account.transactions);
//
// otherAccount.displayBalance();
