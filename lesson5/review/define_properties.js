function newPerson(name) {
  this.name = name;
}

Object.defineProperties(newPerson.prototype, {
  log: {
    value: function() {console.log(this.name)},
    writable: false,
  }
})

let me = new newPerson('Shane Riley');
me.log();     // => Shane Riley
me.log = function() { console.log('Amanda Rose'); };
me.log();     // => Shane Riley
