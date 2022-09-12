let createStudent = function(name, grade) {
  return {
    name,
    grade,
    courses: [],
    info() {
      console.log(`${this.name} is a ${this.grade} year student`)
    },

    listCourses() {
      console.log('--- List Courses ---');
      console.log(this.courses);
      console.log();
    },

    addCourse(newCourse) {
      this.courses.push(newCourse);
    },

    addNote(code, newNote) {
      this.courses.map( (course) => {
        if (course.code === code) {
          if (!course.notes) course.notes = [];
          course.notes.push(newNote);
        }
      })
    },

    viewNotes() {
      console.log('--- Viewing Notes ---');
      this.courses.forEach( course => {
        if (course.notes) console.log(`${course.name}: ${course.notes.join('; ')}`);
      })
      console.log();
    },

    updateNote(code, newNote) {
      this.courses.map( (course) => {
        if (course.code === code) {
          if (!course.notes) course.notes = [];
          course.notes = [newNote];
        }
      })
    }
  }
};


let foo = createStudent('Foo', '1st');
foo.info();

foo.listCourses();

foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();

foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"
