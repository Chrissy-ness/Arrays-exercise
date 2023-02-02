//ES2015 Arrow Functions Shorthand 
//implicit return
const double = n => n * 2;

//standard arrow func
const double2 = n => {
    return n * 2;
}

//Refactor the following function to use arrow fuctions
const squareAndFindEvens = (val) => {
    const squares = val.map((num) => num ** 2);
    const evens = squares.filter((square) => square % 2 === 0)
    return evens; 
}