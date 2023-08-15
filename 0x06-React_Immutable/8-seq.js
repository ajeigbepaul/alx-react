import { Seq } from "immutable";

function printBestStudents(grades) {
  const filteredGrades = Seq(grades)
    .filter((student) => student.score >= 70)
    .map((student) => ({
      ...student,
      firstName:
        student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
      lastName:
        student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
    }))
    .toObject();

  console.log(JSON.stringify(filteredGrades, null, 2));
}

// Example usage
const grades = {
  1: {
    score: 99,
    firstName: "guillaume",
    lastName: "salva",
  },
  2: {
    score: 65,
    firstName: "john",
    lastName: "doe",
  },
};

printBestStudents(grades);
