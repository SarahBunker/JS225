function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function makeSubN(n) {
  return function(a) {
    return subtract(a, n);
  }
}

function makePartialFunc(func, n) {
  return function(a) {
    return func(a, n);
  }
}

let sub5 = makePartialFunc(subtract,5);

console.log(sub5(10)); // 5
console.log(sub5(20)); // 15

let multiplyBy5 = makePartialFunc(multiply, 5);

console.log(multiplyBy5(100)); // 500


let subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  return function(students) {
    return rollCall('Math', students);
  }
  // implement this function...
}

let mathRollCall = makeMathRollCall();
mathRollCall(subjects['Math']);
// => Math:
// => Fatima
// => Gary
// => Susan
