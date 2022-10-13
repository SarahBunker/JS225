/*
write a function
input: object and property key
output: object where property key is defined
  or null if not defined

rules

DataStructure

Algorithm
Guard Clause
if object does not have property return null

set currentObject to the current object
while the prototype of the object is not the Object.prototype
  if the current object has the propKey
    return the current object
    set currentObject to the value of the prototype property
Check one last time with the current object as the Object.prototype

// shouldn't get here
otherwise return null
*/

// function getDefiningObject(object, propKey) {
//   if (object[propKey] === undefined) {
//     return null;
//   }
//
//   let currentObject = object;
//   while (currentObject !== Object.prototype) {
//     if (currentObject.hasOwnProperty(propKey)) return currentObject;
//     currentObject = Object.getPrototypeOf(currentObject);
//   }
//   if (currentObject.hasOwnProperty(propKey)) return currentObject;
//   return null;
// }

// function getDefiningObject(object, propKey) {
//   while (object && !object.hasOwnProperty(propKey)) {
//     object = Object.getPrototypeOf(object);
//   }
//   return object
// }
//
// let foo = {
//   a: 1,
//   b: 2,
// };
//
// let bar = Object.create(foo);
// let baz = Object.create(bar);
// let qux = Object.create(baz);
//
// bar.c = 3;
//
// console.log(getDefiningObject(foo, 'a') === foo);//=== bar);     // => true
// console.log(getDefiningObject(qux, 'c') === bar);     // => true
// console.log(getDefiningObject(qux, 'e') === null);             // => null

// function shallowCopy(object) {
//   let copy = Object.create(Object.getPrototypeOf(object));
//   Object.getOwnPropertyNames(object).forEach( key => {
//     copy[key] = object[key];
//   })
//   return copy;
// }
//
// let foo = {
//   a: 1,
//   b: 2,
// };
//
// let bar = Object.create(foo);
// bar.c = 3;
// bar.say = function() {
//   console.log('c is ' + this.c);
// };
//
// let baz = shallowCopy(bar);
// console.log(baz.a);       // => 1
// baz.say();                // => c is 3
// console.log(baz.hasOwnProperty('a'));  // false
// console.log(baz.hasOwnProperty('b'));  // false
//
// console.log('----------')
// console.log(baz.a);
// console.log(baz.b);

function extend(destination, ...sources) {
  sources.forEach( source => {
    Object.getOwnPropertyNames(source).forEach( prop => {
      destination[prop] = source[prop];
    });
  })
  return destination;
}

let foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe'
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

let object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe
