//Same keys and values ES2015
const createInstructor = (firstName, lastName) => {
    return {
        firstName,
        lastName,
    }
}

//Computed Property Names
let favoriteNumber = 42; 

const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

//Object methods 
const instruct = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
}

//CreateAnimal Function
const createAnimal = (species, verb, noise) => {
    return {
        species,
        [verb]() {
            return noise;
        }
    }
}