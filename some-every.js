//hasOddNumber
function hasOddNumber(arr) {
    const result = arr.some(function(val) {
        return val%2 !== 0;
    })
    return result;
}

//hasAZero
function hasAZero(num) {
    const numString = num.toString();
    const finalRes = numString.split('').some(function(val) {
        return val === '0';
    })
    console.log(finalRes);
}

//hasOnlyOddNumbers 
function hasOnlyOddNumbers(arr) {
    const res = arr.every(function(val) {
        return val % 2 !== 0; 
    })
    console.log(res);
}

//hasNoDuplicates 
function hasNoDuplicates(arr) {
    const res = arr.every(function(val) {
        return arr.indexOf(val) === arr.lastIndexOf(val);
    })
    return res; 
}

//hasACertainKey
function hasACertainKey(arr, key) {
    const res = arr.every(function(val) {
        return key in val;
    })
    console.log(res);
}

//hasCertainValue
function hasCertainValue(arr, key, value) {
    const result = arr.every(function(item) {
        return item[key] === value; 
    })
    console.log(result);
}