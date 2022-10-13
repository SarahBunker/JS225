class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  communicate() {
    console.log(`Hello, my name is ${this.fullName()}`);
  }
  eat() {
    console.log(`Eating`);
  }
  sleep() {
    console.log(`Sleeping`);
  }
}

class Doctor extends Person {
  constructor(firstName, lastName, age, gender, specialization) {
    super(firstName, lastName, age, gender);
    this.specialization = specialization;
  }

  diagnose() {
    console.log(`${this.firstName} says you have the black plague, because their speciality is ${this.specialization}`)
  }
}

class Professor extends Person {
  constructor(firstName, lastName, age, gender, subject) {
    super(firstName, lastName, age, gender);
    this.subject = subject;
  }
  teach() {
    console.log(`${this.firstName} likes teaching ${this.subject}`)
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, gender, degree) {
    super(firstName, lastName, age, gender);
    this.degree = degree;
  }
  study() {
    console.log(`${this.firstName} is studying for their degree: ${this.degree}`);
  }
}

class GraduateStudent extends Student {
  constructor(firstName, lastName, age, gender, degree, graduateDegree) {
    super(firstName, lastName, age, gender, degree);
    this.graduateDegree = graduateDegree;
  }
  research() {
    console.log(`${this.firstName} is reasearching for their graduate degree: ${this.graduateDegree}`);
  }
}

console.log("Person --------------------")
const person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person);     // logs true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
console.log(person.fullName());            // logs 'foo bar'

console.log();
console.log("Doctor --------------------")
const doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.specialization === 'Pediatrics');
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

console.log();
console.log("Professor --------------------")
const professor = new Professor('foo', 'bar', 21, 'gender', 'Math');
professor.teach();

console.log();
console.log("Student --------------------")
const student = new Student('foo', 'bar', 21, 'gender', 'ChemEn');
student.study();

console.log();
console.log("GraduateStudent --------------------")
const graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'
