// Person, Doctor, Professor... I think all of these could be named prototypes and then I create objects from them.

PersonPrototype = {
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  communicate() {
    console.log(`Hello, my name is ${this.fullName()}`);
  },
  eat() {
    console.log(`Eating`);
  },
  sleep() {
    console.log(`Sleeping`);
  },
}

Person = Object.create(PersonPrototype);
Person.init = function(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
};

Doctor = Object.create(Person);
Doctor.init = function(firstName, lastName, age, gender, specialization) {
  Person.init.call(this, firstName, lastName, age, gender);
  this.specialization = specialization;
}
Doctor.diagnose = function() {
  console.log(`${this.firstName} says you have the black plague, because their speciality is ${this.specialization}`)
}

Professor = Object.create(Person);
Professor.init = function(firstName, lastName, age, gender, subject) {
  Person.init.call(this, firstName, lastName, age, gender);
  this.subject = subject;
}
Professor.teach = function() {
  console.log(`${this.firstName} likes teaching ${this.subject}`)
}


Student = Object.create(Person);
Student.init = function(firstName, lastName, age, gender, degree) {
  Person.init.call(this, firstName, lastName, age, gender);
  this.degree = degree;
}
Student.study = function() {
  console.log(`${this.firstName} is studying for their degree: ${this.degree}`);
}

GraduateStudent = Object.create(Student);
GraduateStudent.init = function(firstName, lastName, age, gender, degree, graduateDegree) {
  Student.init.call(this, firstName, lastName, age, gender, degree);
  this.degree = degree;
}
GraduateStudent.research = function() {
  console.log(`${this.firstName} is reasearching for their graduate degree: ${this.graduateDegree}`);
}

console.log("Person --------------------")
const person = Object.create(Person) //new Person('foo', 'bar', 21, 'gender');
person.init('foo', 'bar', 21, 'gender');
console.log(Person.isPrototypeOf(person)); // logs true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
console.log(person.fullName());            // logs 'foo bar'

console.log();
console.log("Doctor --------------------")
const doctor = Object.create(Doctor)
doctor.init('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(Person.isPrototypeOf(doctor)); // logs true
console.log(Doctor.isPrototypeOf(doctor)); // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.specialization === 'Pediatrics');
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

console.log();
console.log("Professor --------------------")
const professor = Object.create(Professor)
professor.init('foo', 'bar', 21, 'gender', 'Math');
professor.teach();

console.log();
console.log("Student --------------------")
const student = Object.create(Student)
student.init('foo', 'bar', 21, 'gender', 'ChemEn');
student.study();

console.log();
console.log("GraduateStudent --------------------")
const graduateStudent = Object.create(GraduateStudent)
graduateStudent.init('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(Person.isPrototypeOf(graduateStudent)); // logs true
console.log(Student.isPrototypeOf(graduateStudent)); // logs true
console.log(GraduateStudent.isPrototypeOf(graduateStudent)); // logs true
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'
