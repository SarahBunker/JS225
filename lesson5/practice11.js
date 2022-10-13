console.log('problem 1 --------------------------------------------------')
// let shape = {
//   getType() {
//     return this.type;
//   }
// }
//
// let Triangle = function(a,b,c) {
//   this.a = a;
//   this.b = b;
//   this.c = c;
//   this.type = 'triangle';
// }
//
// Triangle.prototype = shape;
// Triangle.prototype.getPerimeter = function() {
//   return this.a + this.b + this.c;
// }
//
// Triangle.prototype.constructor = Triangle;  // I missed this
//
// let t = new Triangle(3, 4, 5);
// console.log(t.constructor);                 // Triangle(a, b, c)
// console.log(shape.isPrototypeOf(t) === true);        // true
// console.log(t.getPerimeter() === 12);              // 12
// console.log(t.getType() === 'triangle');                   // "triangle"

console.log('problem 2 --------------------------------------------------')

// Write a constructor function that can be used with or without the new operator, and return the same result in either form. Use the code below to check your solution:

// function User(first, last) {
//   let newObject = {};
//   let that = newObject;
//   that.name = first + ' ' + last;
//   return that;
// }

// function User(first, last) {
//   if (!(this instanceof User)) {
//     return new User(first, last);
//   }
//
//   this.name = first + ' ' + last;
//   // ...
// }
//
// let name = 'Jane Doe';
// let user1 = new User('John', 'Doe');
// let user2 = User('John', 'Doe');
//
// console.log(name);         // => Jane Doe
// console.log(user1.name);   // => John Doe
// console.log(user2.name);   // => John Doe


console.log('problem 3 --------------------------------------------------')

// function createObject(obj) {
//   let Constructor = function() {};
//   Constructor.prototype = obj;
//   return new Constructor;
// }
//
// let foo = {
//   a: 1
// };
//
// let bar = createObject(foo);
// console.log(foo.isPrototypeOf(bar));         // true

console.log('problem 4 --------------------------------------------------')

// Object.prototype.begetObject = function() {
//   let Constructor = function() {};
//   Constructor.prototype = this;
//   return new Constructor;
// }
//
// let foo = {
//   a: 1,
// };
//
// let bar = foo.begetObject();
// console.log(foo.isPrototypeOf(bar));         // true

console.log('problem 5 --------------------------------------------------')

// function neww(constructor, args) {
//   // let newObject = {};
//   let that = new Object();
//   Object.setPrototypeOf(that, constructor.prototype);
//   that.constructor = constructor;
//   // change prototype
//   // change constructor?
//   constructor.apply(that, args);
//   return that;
// }

function neww(constructor, args) {
  let object = Object.create(constructor.prototype);
  let result = constructor.apply(object, args);

  return (typeof result === 'object') ? result : object;
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
console.log(john.constructor);         // Person(firstName, lastName) {...}
