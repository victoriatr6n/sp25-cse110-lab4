let student = {
  name: 'Sarah',
  major: 'Computer Science',
  'Grad Year': '2022',
  greeting: function() { console.log("Hello!");},
  'Favorite Teacher': {
    name: 'Thomas Powell',
    course: 'CSE 110'
    },
  courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};
//part A:
let student_name = student.name
//part B:
let grad_year = student["Grad Year"]
//part C:
let greeting = student.greeting()
//part D:
let teacher = student["Favorite Teacher"].name
//part E:
let first_course = student.courseLoad[0]
