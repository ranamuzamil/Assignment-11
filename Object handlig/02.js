// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  };
   
// Before

console.log("Object before deleting rollno property:");
const Before = Object.keys(student);
for (let i = 0; i < Before.length; i++) {
  console.log(Before[i]);
  
}

delete student.rollno;

// Print the object after deleting the property
console.log("Object after deleting rollno property:");

const after = Object.keys(student);
for (var i = 0; i < after.length; i++) {
  console.log(after[i]);
}