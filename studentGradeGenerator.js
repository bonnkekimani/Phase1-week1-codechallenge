// Prompt the user to input student marks
let marks = prompt("Enter student marks (between 0 and 100):");

// Convert marks to a number
marks = Number(marks);

// Output the correct grade based on the marks entered

if (marks > 79 && marks <=100) {
  console.log("Grade: A");
} else if (marks >= 60 && marks <= 79) {
  console.log("Grade: B");
} else if (marks >= 50 && marks <= 59) {
  console.log("Grade: C");
} else if (marks >= 40 && marks <= 49) {
  console.log("Grade: D");
} else if (marks >= 0 && marks <= 39) {
  console.log("Grade: E");
} else {
    console.log("Invalid Input");
}
