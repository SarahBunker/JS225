// let foo = {};
// let bar = Object.create(foo);
//
// foo.a = 1;
//
// console.log(bar.a); // foo{ a: 1} << bar

// let foo = {};
// let bar = Object.create(foo);
//
// foo.a = 1;
// bar.a = 2;
// console.log(bar.a);

//
// let boo = {};
// boo.myProp = 1;
//
// let far = Object.create(boo);
//
// // lots of code
//
// far.myProp;       // 1

// problem 1 -----------------------------------------

// function getDefiningObject(object, propKey) {
//   while(Object.getPrototypeOf(object) !== null) {
//     if (object.hasOwnProperty(propKey)) return object;
//     object = Object.getPrototypeOf(object);
//   }
//   return null;
// }

// function getDefiningObject(object, propKey) {
//   while (object && !object.hasOwnProperty(propKey)) {
//     object = Object.getPrototypeOf(object);
//   }
//
//   return object;
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
// console.log(getDefiningObject(qux, 'c') === bar);     // => true
// console.log(getDefiningObject(qux, 'e'));             // => null

function shallowCopy(object) {
  // This is actually a deepCopy because of the recursion I added on lines 63-66
  let prototype = Object.getPrototypeOf(object);
  let copy = Object.create(prototype);
  let objProperties = Object.getOwnPropertyNames(object);
  objProperties.forEach( (property) => {
    if (typeof object[property] === "object") {
      copy[property] = shallowCopy(object[property]);
      return;
    }
    copy[property] = object[property];
  })
  return copy;
}

// let foo = {
//   a: 1,
//   b: 2,
// };
//
// let dog = {
//   name: "Rocky",
//   age: "4",
// }
//
// let bar = Object.create(foo);
// bar.c = 3;
// bar.say = function() {
//   console.log('c is ' + this.c);
// };
// bar.pet = dog;
//
// let baz = shallowCopy(bar);
// console.log(baz.a);       // => 1
// baz.say();                // => c is 3
// console.log(baz.hasOwnProperty('a') === false);  // false
// console.log(baz.hasOwnProperty('b') === false);  // false
//
// console.log(baz.pet.name);
// baz.pet.name = "The Rocky";
// console.log(baz.pet.name);
//
// console.log(bar.pet.name);

function extend(destination, ...args) {
  args.forEach( object => {
    let objProperties = Object.getOwnPropertyNames(object);
    objProperties.forEach( (property) => {
      if (typeof object[property] === "object") {
        destination[property] = shallowCopy(object[property]);
        return;
      }
      destination[property] = object[property];
    })
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
