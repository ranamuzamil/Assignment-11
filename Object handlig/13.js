// 13. Write a JavaScript function to retrieve all the names of object's own and inherited properties.
function getAllPropertyNames(obj) {
    let propNames = [];  
    for (let propName in obj) {
      if (obj.hasOwnProperty(propName) && !propNames.includes(propName)) {
        propNames.push(propName);
      }
    }
    let proto = Object.getPrototypeOf(obj);
    while (proto) {
      let protoPropNames = Object.getOwnPropertyNames(proto);
      for (let i = 0; i < protoPropNames.length; i++) {
        if (!propNames.includes(protoPropNames[i])) {
          propNames.push(protoPropNames[i]);
        }
      }
        proto = Object.getPrototypeOf(proto);
    }
    return propNames;
  }
  let myObj = {
    name: "John",
    age: 30
  };
  let allPropNames = getAllPropertyNames(myObj);
  console.log(allPropNames);