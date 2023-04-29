// 1. Write a JavaScript program to list the properties of a JavaScript object
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};

const keys = Object.keys(student);
for (var i = 0; i < keys.length; i++) {
  console.log(keys[i]);
}