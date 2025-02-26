const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

findStudent = students.find((student) => (student.name === "Marco Lanci"))

console.log(findStudent.class);


// Bonus

let foundStudent = ""

for (let i = 0; i < students.length; i++) {
  const thisStudent = students[i];
  if (thisStudent.name === "Marco Lanci") {
    foundStudent += thisStudent.class
    break
  }


}

console.log(foundStudent);
