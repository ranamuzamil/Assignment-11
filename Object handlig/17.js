// 17. Write a JavaScript function to check whether an object contains given property.
function hasProperty(student, propName) {
    return student.hasOwnProperty(propName);
  }
  let student = {
    name: "Rm_Muzamil",
    class: "11",
    rollno: 15
  };  
console.log(  hasProperty(student, "name"));
console.log(  hasProperty(student, "class"));
console.log(  hasProperty(student, "height"));
console.log(  hasProperty(student, "color"));