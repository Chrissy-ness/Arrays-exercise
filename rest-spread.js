//Refactor function to use the rest operator & an arrow function.
function filterOutOdds(arr) {
    const nums = [...arr];
    return nums.filter((num) => num % 2 === 0);
}
//or 

const filterOutOdds2 = (...arr) => arr.filter((val) => val % 2 === 0); 

//findMin
const findMin = (...args) => Math.min(...args);

//mergeObjects 
const mergeObjects = ( obj1, obj2) => ({...obj1, ...obj2});

//doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...otherVals) => [...arr, ...otherVals.map((val) => val*2)];

//slice and Dice 
const removeRandom = (arr) => {
    let idx = Math.floor(Math.random()*arr.length);
    return ([ ...arr.slice(0, idx), ...arr.slice(idx + 1)]);
}

const extend = (arr1, arr2) => ([...arr1, ...arr2]);

const addKeyVal = (obj, key, value) => {
    let newObj = {...obj};
    newObj[key] = value;
    return newObj;
}

const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}

const combine = (obj1, obj2) => ({...obj1, ...obj2});

const update = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj; 
}