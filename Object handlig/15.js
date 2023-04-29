//  15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
function objectToList(obj) {
  return Object.entries(obj);
}
const list = {
  name: "Rm_Muzamil",
  age: 17,
  city: "Faisalabad"
};

console.log(objectToList(list));
