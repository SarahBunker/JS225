// let prot = {};
//
// let foo = Object.create(prot);
//
// let jam = Object.create(foo);
//
// let a = Object.getPrototypeOf(foo);
//
// console.log(a);
// console.log(a === prot);
//
// console.log(prot.isPrototypeOf(foo));
// console.log(prot.isPrototypeOf(jam));

// let prot = {};
//
// let foo = Object.create(prot);
//
// console.log(prot.isPrototypeOf(foo));
// console.log(Object.prototype.isPrototypeOf(foo));


// let foo = {
//   hello() {
//     return 'hello ' + this.name;
//   },
// };
//
// let bar = Object.create(foo);
// // bar.name = 'world';
// console.log(bar.hello());          // returns hello world

// let foo = {};
// let bar = Object.create(foo);
//
// foo.a = 1;
//
// console.log(bar.a);

// let foo = {};
// let bar = Object.create(foo);
//
// foo.a = 1;
// bar.a = 2;
// console.log(bar.a);

let boo = {};
boo.myProp = 1;

let far = Object.create(boo);

// lots of code
console.log(far.hasOwnProperty('myProp'))
far.myProp;       // 1
