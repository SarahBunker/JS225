let invoices = {
  unpaid: [],
};

invoices.add = function (name, amount) {
  let newInvoice = {
    name,
    amount,
  }
  this.unpaid.push(newInvoice);
}

invoices.totalDue = function() {
  return this.unpaid.reduce( (total, invoice) => {
    total += invoice.amount;
    return total;
  }, 0)
}

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);
// console.log(invoices.unpaid);
// console.log(invoices);

console.log(invoices.totalDue());

invoices.paid = [];
invoices.payInvoice = function(name) {
  let unpaid = [];
  this.unpaid.forEach( invoice => {
    if (invoice.name === name) {
      this.paid.push(invoice);
      return;
    }
    unpaid.push(invoice);
  }, []);
  this.unpaid = unpaid;
}

invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');



invoices.totalPaid = function() {
  return this.paid.reduce( (total, invoice) => {
    total += invoice.amount;
    return total;
  }, 0)
}

console.log(invoices.totalPaid());
console.log(invoices.totalDue());
/*
{
  unpaid: [ { name: 'Shelly', amount: 50 }, { name: 'Shsdlkfy', amount: 250 } ],
  add: [Function],
  totalDue: [Function]
}

*/
