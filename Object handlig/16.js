/* 16. Write a JavaScript function to get a copy of the object where the keys have become the values and 
the values the keys */
function swapKeysAndValues(obj) {
    let swapped = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            swapped[obj[key]] = key;
        }
    }
    return swapped;
}
let student = {
    name: "Rm_Muzamil",
    class: 11,
    rollno: 15
};
console.log(swapKeysAndValues(student));