const myNames = require("./names");
console.log(myNames);

const myHobbies = require("./hobbies");
console.log(myHobbies);

function manHobbies() {
    return {
        myNames: myNames,
        myHobbies: myHobbies
    };
}

console.log(manHobbies);


