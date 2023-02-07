//Object Destructuring 1
//console.log(numPlanets) returns 8
//console.log(yearNeptuneDiscovered) returns 1846

//Object Destructuring 2
//console.log(discoveryYears) will return the object {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

//Object Destructuring 3
//returns 'Your name is Alejandro and you like purple'
//returns 'Your name is Melissa and you like green'
// returns 'Your name is undefined and you like green'

//Array Destructuring 1
//console.log(first) returns "Maya"
//console.log(second) returns "Marisa"
//console.log(third) returns "Chi"

//Array Destructuring 2
//console.log(raindrops) returns "Raindrios on roses"
//console.log(whiskers) returns "Whiskers on kittens"
//console.log(aFewOfMyFavoriteThings) returns the array ["Bright copper kettles", "Warm Woolen mittens", "Brown paper packages tied up with strings"]

//Array Destructuring 3 
// console.log(numbers) will return [10, 30, 20]

//ES5 Assigning Variables to Object Properties
const obj = {
    numbers: {
        a:1,
        b:2
    }
}

const {a,b} = obj.numbers;

//ES2015 One-Line Array Swap with Destructuring
const arr = [1,2]
[arr[1], arr[0]] = [arr[0], arr[1]];

//raceResults()
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})
