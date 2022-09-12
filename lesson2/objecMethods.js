// "use strict"

let me = {
  firstName: 'Sarah',
  lastName: 'Bunker',
}

let friend = {
  firstName: 'Taci',
  lastName: 'Zollinger',
}

let mother= {
  firstName: 'Rachel',
  lastName: 'Jensen',
}

let uncle = {
  firstName: 'David',
  lastName: 'Ream',
}

let people = {
  collection: [me, friend, mother],
  fullName(person) {
    console.log(person.firstName + " " + person.lastName);
  },

  rollcall() {
    this.collection.forEach(this.fullName);
  },

  add: function(person) {
    if (this.isInvalidPerson(person)) return;

    this.collection.push(person);
  },

  getIndex: function(person) {
    let index = -1;
    this.collection.forEach(function(comparator, i) {
      if (comparator.firstName === person.firstName &&
          comparator.lastName === person.lastName) {
        index = i;
      }
    });

    return index;
  },

  remove: function(person) {

    let index = this.getIndex(person);

    if (index === -1) {
      return;
    }

    this.collection.splice(index, 1);
  },


  isInvalidPerson: function(person) {
    return typeof person.firstName !== 'string' || typeof person.lastName !== 'string';
  },

  get: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }
    return this.collection[this.getIndex(person)];
  },

  update: function(person) {
    if (this.isInvalidPerson(person)) return;

    let existingPersonId = this.getIndex(person);
    if (existingPersonId === -1 ) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },
}

people.rollcall();
people.add(uncle);
console.log();
people.rollcall();

// people.remove(uncle);
people.remove({firstName: 'David', lastName: 'Ream'});
people.remove({firstName: 'David', lastName: 'Re'});
console.log();
people.rollcall();

console.log(people.get(friend));
people.add(friend);
people.rollcall();

people.update(friend)
