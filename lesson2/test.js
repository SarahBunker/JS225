let car = {
  fuel: 7.8,
  running: false,
  start: function() {
    this.running = true;
  },
};

car.stop = function() {
  this.running = false;
};

car.drive = function(distance) {
  this.fuel -= distance / 52;
};

console.log(car);
car.start();
console.log(car);
car.stop();
console.log(car);
car.drive(139);
console.log(car);
