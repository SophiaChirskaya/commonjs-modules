const fullName = require("./names");
console.log(fullName);

const allHobbies = require("./hobbies");
console.log(allHobbies);

function manHobbies() {

 
    return {
        fullName: fullName,
        allHobbies: allHobbies
    };
}

console.log(manHobbies);


