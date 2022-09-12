let createStudent = function(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      console.log(`${this.name} is a ${this.year} year student`)
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
    },

    accessCourse(code) {
      return this.courses.filter( course => course.code === code)[0];
    },

    accessCourseByName(courseName) {
      return this.courses.filter( course => course.name === courseName)[0];
    },
  }
};

let school = {
  students: [],

  addStudent(name, year) {
    const validYears = ['1st', '2nd', '3rd', '4th', '5th'];
    if (!validYears.includes(year)) {
      console.log("Invalid Year");
      return;
    }
    let newStudent = createStudent(name, year);
    this.students.push(newStudent);
    return newStudent;
  },
  enrollStudent(studentName, course) {
    this.accessStudent(studentName).addCourse(course);
  },
  addGrade(studentName, courseCode, grade) {
    let student = this.accessStudent(studentName);
    let course = student.accessCourse(courseCode);
    course.grade = grade;
  },
  getReportCard(studentName) {
    let student = this.accessStudent(studentName);
    console.log(`Report Card: ${student.name.toUpperCase()}`);
    student.courses.forEach( course => {
      if (course.grade) {
        console.log(`${course.name}: ${course.grade}`);
        return;
      }
      console.log(`${course.name}: In progress`);
    })
    console.log();
  },
  courseReport(subject) {
    let logIntro = true;
    let total = 0
    let count = 0
    let logAverage = false;
    this.students.forEach( student => {
      if (student.accessCourseByName(subject)) {
        let course = student.accessCourseByName(subject);
        if (course.grade) {
          if (logIntro) {
            console.log(`=${subject}=`)
            logIntro = false;
          }
          logAverage = true;
          total += course.grade;
          count += 1;
          console.log(`${student.name}: ${course.grade}`);
        }
      }
      return false;
    })
    if (logAverage) {
      console.log(`CourseAverage: ${parseInt(total/count)}`);
      console.log();
    }

    // Logs the grades of all students for a given course name. Only student with grades are part of the course report.
  },

  accessStudent(studentName) {
    return this.students.filter( student=> student.name === studentName)[0]
  },
}

school.addStudent('foo', '3rd');
school.addStudent('bar', '1st');
school.addStudent('qux', '2nd');

school.enrollStudent('foo', { name: 'Math', code: 101,});
school.enrollStudent('foo', { name: 'Advanced Math', code: 102, });
school.enrollStudent('foo', { name: 'Physics', code: 202, });

school.enrollStudent('bar', { name: 'Math', code: 101, });

school.enrollStudent('qux', { name: 'Math', code: 101, });
school.enrollStudent('qux', { name: 'Advanced Math', code: 102, });

school.addGrade('foo', 101, 95);
school.addGrade('foo', 102, 90);

school.addGrade('bar', 101, 91);

school.addGrade('qux', 101, 93);
school.addGrade('qux', 102, 90);

school.accessStudent('foo').listCourses();
school.accessStudent('bar').listCourses();
school.accessStudent('qux').listCourses();

school.getReportCard('foo');
school.getReportCard('bar');
school.getReportCard('qux');

school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');
