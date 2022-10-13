let prot = {
  say() {console.log("hello")}
};

let foo = Object.create(prot);
console.log(Object.getPrototypeOf(foo) === prot);
console.log(prot.isPrototypeOf(foo));
foo.name = function() {console.log("Elizabeth")};

let baz = Object.create(foo);
console.log(prot.isPrototypeOf(baz));


prot.isPrototypeOf(foo);
console.log(Object.prototype.isPrototypeOf(foo));

let a = Object.getOwnPropertyNames(foo);
console.log(a);
foo.name();
