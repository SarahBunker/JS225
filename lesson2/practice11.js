let id = 0;

let makeProduct = function(name, stock, price) {
  let obj = {
    id,
    name,
    stock,
    price,
    setPrice(price) {
      if (price <=0 ) return;
      this.price = price;
    },
    describe() {
      console.log(`Name: ${this.name}`);
      console.log(`ID: ${this.id}`);
      console.log(`Price: ${this.price}`);
      console.log(`Stock: ${this.stock}`);
    },
  }
  id += 1;
  return obj
}

let describeProduct = function (product) {
  product.describe();
}

let scissors = makeProduct("Scissors", 8, 10);
let drill =  makeProduct("Cordless Drill", 15, 45);

drill.setPrice(-4);

scissors.describe();
drill.describe();
