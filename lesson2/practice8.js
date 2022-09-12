let makeCar = function(rate, breakPower) {
  return {
    speed: 0,
    rate,
    breakPower,
    accelerate() {
      this.speed += this.rate;
    },
    brake() {
      this.speed -= this.breakPower;
      if (this.speed < 0) this.speed = 0;
    }
  }
}

let sedan = makeCar(8 ,6);
let coupe = makeCar(12, 10);
let hatchback = makeCar(9, 6);

sedan.accelerate();
coupe.accelerate();
hatchback.accelerate();

console.log(sedan.speed);
console.log(coupe.speed);
console.log(hatchback.speed);

sedan.brake();
console.log(sedan.speed);
sedan.brake();
console.log(sedan.speed);
