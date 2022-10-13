console.log('problem 1 -------------------------------------------------------')

// let a = 1;
// let foo;
// let obj;
//
// function Foo() {
//   this.a = 2;
//   this.bar = function() {
//     console.log(this.a);
//   };
//   this.bar();
// }
//
// foo = new Foo(); //{a: 2, bar()} // outputs 2
//
// foo.bar(); // outputs 2
// Foo(); // global a = 2, global bar() // outputs 2
//
// obj = {};
// Foo.call(obj); //obj = {a: 2, bar()} //outputs 2
// obj.bar(); // outputs 2
//
// console.log(this.a); // thought it outputs 2 // `this` points to module.exports returns undefined not 2

console.log('problem 2 -------------------------------------------------------')

// let RECTANGLE = {
//   area() {
//     return this.width * this.height;
//   },
//   perimeter() {
//     return 2 * (this.width + this.height);
//   },
// };
//
// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area.call(this);
//   this.perimeter = RECTANGLE.perimeter.call(this);
// }
//
// let rect1 = new Rectangle(2, 3);
// console.log(rect1.area);
// console.log(rect1.perimeter);

console.log('problem 3 -------------------------------------------------------')

let Circle = function(radius) {
  this.radius = radius;
}

Circle.prototype.area = function() {
  return Math.PI*this.radius**2;
}

let a = new Circle(3);
let b = new Circle(4);

console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27

console.log('problem 4 -------------------------------------------------------')

// let ninja;
// function Ninja() {
//   this.swung = true;
// }
//
// ninja = new Ninja(); //{swung: true, swingSword() returns swung}
//
// Ninja.prototype.swingSword = function() {
//   return this.swung;
// };
//
// console.log(ninja.swingSword()); // true

console.log('problem 5 -------------------------------------------------------')

// let ninja;
// function Ninja() {
//   this.swung = true;
// }
//
// ninja = new Ninja(); // {swung: true}
//
// Ninja.prototype = {  // doesn't change the ninja prototype, just changes future objects created from the constructor prototypes
//   swingSword: function() {
//     return this.swung;
//   },
// };
//
// console.log(ninja.swingSword()); // raises error becaue ninja.swingSword is not a function

console.log('problem 6 -------------------------------------------------------')

// let ninjaA;
// let ninjaB;
// function Ninja() {
//   this.swung = false;
// }
//
// ninjaA = new Ninja();
// ninjaB = new Ninja();
//
// Ninja.prototype.swing = function() {
//   this.swung = true;
//   return this;
// }
//
// console.log(ninjaA.swing().swung);      // must log true
// console.log(ninjaB.swing().swung);      // must log true

console.log('problem 7 -------------------------------------------------------')

let ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

// let ninjaB = Object.create(Object.getPrototypeOf(ninjaA));
let ninjaB = new ninjaA.constructor;

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true
