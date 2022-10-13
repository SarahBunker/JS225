var a = 1;
let foo;
let obj;

function Foo() {
  this.a = 2;
  this.bar = function() {
    console.log(this.a);
  };
  this.bar();
}

foo = new Foo(); // 2

foo.bar(); // 2
// Foo(); // sets global a to 2?

obj = {};
Foo.call(obj); // adds a to the object logs 2
obj.bar(); // object now has an a property and returns 2
//
console.log("---")
console.log(this.a); // 1
