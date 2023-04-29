// 14. Write a JavaScript function to retrieve all the values of an object's properties.
function getValuesOfObject(obj) {
    console.log(Object.values(obj));    
}
let list ={
    name: "Rm_Muzamil",
    age: 17,
    class: 11
}
getValuesOfObject(list)