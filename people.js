const fullName = require("./names");


const allHobbies = require("./hobbies");


function nameHobbies() {

    const personName = fullName("Anna", "Nicoli");
    const personHobbies = allHobbies("jogging", "reading", "skating");

 
    return {
        fullName: personName.firstName + " " + personName.lastName,
        allHobbies: personHobbies[0] + ", " + personHobbies[1] + ", " + personHobbies[2]
    };
}

console.log(nameHobbies());


