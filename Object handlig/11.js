function printAllMethods(obj) {
    for(var propName in obj) {
      if(typeof(obj[propName]) == "function") {
        console.log(propName);
      }
    }
  }
  printAllMethods([]);  