"use strict"

// function Dog(name, breed, weight) {
//   // deleted Object.setPrototypeOf(this, Dog.myPrototype);
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
// }
//
// Dog.prototype.bark = function() {
//   console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
// };
//
// let maxi = new Dog('Maxi', 'German Shepherd', 32);
// maxi.bark(); // 'Woof!'
//
// let biggie = new Dog('Biggie', 'Whippet', 9);
// biggie.bark(); // 'Yip!'
// console.log(biggie.constructor === Dog);

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
// foo = new Foo(); // 2
//
// foo.bar(); // 2
// Foo(); // sets global a to 2?
//
// obj = {};
// Foo.call(obj); // adds a to the object logs 2
// obj.bar(); // object now has an a property and returns 2
// //
// console.log(this.a); // global object has the property 2, output to screen
// // in node there is an extra scope so this actually returns undefined in node and 2 in browser

// let RECTANGLE = {
//   area() {
//     return this.width * this.height;
//   },
//   perimeter() {
//     return 2 * (this.width + this.height);
//   },
// };
//
// // function Rectangle(width, height) {
// //   this.width = width;
// //   this.height = height;
// //   this.area = RECTANGLE.area(); // this is set to RECTANGLE which doesn't have width and height defined, so undefined + undefined is NaN and same with mult
// //   this.perimeter = RECTANGLE.perimeter();
// // }
//
// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area.call(this);
//   this.perimeter = RECTANGLE.perimeter.call(this);
// }
//
// let rect1 = new Rectangle(2, 3);
// console.log(rect1.area); // NaN  >> fixed 6
// console.log(rect1.perimeter); // NaN >> fixed 10

// problem 3 ------------------------------------------------------------------

// function Circle(radius) {
//   this.radius = radius;
// }
//
// Circle.prototype.area = function() {
//   return Math.PI * this.radius**2;
// }
//
// let a = new Circle(3);
// let b = new Circle(4);
//
// console.log(a.area().toFixed(2)); // => 28.27
// console.log(b.area().toFixed(2)); // => 50.27

// problem 4 ------------------------------------------------------------------

// let ninja;
// function Ninja() {
//   this.swung = true;
// }
//
// ninja = new Ninja();
//
// Ninja.prototype.swingSword = function() {
//   return this.swung;
// };
//
// console.log(ninja.swingSword());

// problem 5 ------------------------------------------------------------------

// let ninja;
// function Ninja() {
//   this.swung = true;
// }
//
// ninja = new Ninja();
//
// Ninja.prototype = {
//   swingSword: function() {
//     return this.swung;
//   },
// };
//
// console.log(ninja.swingSword());

// problem 6 ------------------------------------------------------------------

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
// // Add a swing method to the Ninja prototype which
// // returns the calling object and modifies swung
//
// console.log(ninjaA.swing().swung);      // must log true
// console.log(ninjaB.swing().swung);      // must log true

// problem 7 ------------------------------------------------------------------

// let ninjaA = (function() {
//   function Ninja(){};
//   return new Ninja();
// })();
//
// // create a ninjaB object
// let constructor = ninjaA.constructor;
// let ninjaB = new constructor;
//
// console.log(ninjaB.constructor === ninjaA.constructor);    // should log true

// problem 1 ------------------------------------------------------------------

// let shape = {
//   getType() {
//     return this.type;
//   }
// }
//
// let Triangle = function(a, b, c) {
//   this.a = a;
//   this.b = b;
//   this.c = c;
//   this.type = "triangle"
// }
//
// Triangle.prototype = shape;
// shape.constructor = Triangle;
// shape.getPerimeter = function() {
//   return (this.a + this.b + this.c);
// }
//
// let t = new Triangle(3, 4, 5);
// console.log(t.constructor === Triangle);                 // Triangle(a, b, c)
// console.log(shape.isPrototypeOf(t));        // true
// console.log(t.getPerimeter() === 12);              // 12
// console.log(t.getType() === "triangle");                   // "triangle"

// problem 2 ------------------------------------------------------------------

// // function User(first, last) {
// //   if (this === undefined) {
// //     return new User(first, last);
// //   }
// //   this.name = first + " " + last;
// // }
//
// function User(first, last) {
//   if (!(this instanceof User )) {
//     return new User(first, last);
//   }
//   this.name = first + " " + last;
// }
//
// let name = 'Jane Doe';
// let user1 = new User('John', 'Doe');
// let user2 = User('John', 'Doe');
// //
// console.log(name);         // => Jane Doe
// console.log(user1.name);   // => John Doe
// console.log(user2.name);   // => John Doe

// problem 3 ------------------------------------------------------------------

// function createObject(obj) {
//   return  Object.setPrototypeOf({}, obj);
// }
//
// // function createObject(obj) {
// //   let constructor = function () {};
// //   constructor.prototype = obj;
// //   return new constructor;
// // }
//
// let foo = {
//   a: 1
// };
//
// let bar = createObject(foo);
// console.log(foo.isPrototypeOf(bar));         // true

// problem 4 ------------------------------------------------------------------

// Object.prototype.begetObject = function() {
//   return Object.setPrototypeOf({}, this);
// }
//
// let foo = {
//   a: 1,
// };
//
// let bar = foo.begetObject();
// console.log(foo.isPrototypeOf(bar));         // true

// problem 5 ------------------------------------------------------------------

// Note that if the constructor function has no explicit return, the created object will be returned.

function neww(constructor, args) {
  let object = Object.create(constructor.prototype);
  let result = constructor.apply(object, args);

  return typeof result === 'object' ? result : object;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

let john = neww(Person, ['John', 'Doe']);
john.greeting();          // => Hello, John Doe
console.log(john.constructor === Person);         // Person(firstName, lastName) {...}
