//Double Values
function doubleValues(arr) {
    let doubledArr = [];
    arr.forEach(function(value){
        doubledArr.push(value * 2);
    })
    return doubledArr;
}

//Only Even Values
function onlyEvenValues(arr) {
    let evens = [];
    arr.forEach(function(value) {
        if(value % 2 === 0) {
            evens.push(value);
        }
    })
    return evens;
}

//Show First and Last
function showFirstAndLast(arr) {
    let firstAndLast = []
    arr.forEach(function(value) {
       firstAndLast.push(`${value[0]}`+`${value[value.length-1]}`);
    })
    return firstAndLast;
}

//Add Key and Value
function addKeyAndValue(arr, key, value) {
    arr.forEach(function(val) {
        val[key] = value;
    });
    return arr;
}

//Vowel Count 
function vowelCount(string) {
    let newObj = [];
    let newArr = [];
    let nullCounter = null; 

    for(let i = 0; i < string.length; i++) {
        if(newArr.length === string.length) {
            nullCounter = true;
        }
        newArr.push(string[i].toLowerCase());
    }

    if(!nullCounter) {
       newArr.forEach(function(letter) {
        if('aeiou'.includes(letter)) {
            if(newObj[letter]) {
                newObj[letter]++;
            }
            else {
                newObj[letter] = 1;
            }
        }
       })
    }
    return newObj;
}

//Map Double Values
function doubleValuesWithMap(arr) {
    function double(x) {
        return(x * 2);
    }
    const newArr = arr.map(double);
    console.log(newArr);
}

//valTimesIndex
function valTimesIndex(arr) {
    const result = arr.map(function(val, i) {
        return(val * i);
    });
    console.log(result);
}

//extractKey 
function extractKey(arr, key) {
    const newArr = arr.map(function(val){
        return val[key];
    })
    console.log(newArr);
}

//extractFullName
function extractFullName(arr) {
    const newArr = arr.map(function(val) {
        return(`${val.first} ${val.last}`)
    })
    console.log(newArr)
}

//filterByValue
function filterByValue(arr, key) {
    const newArr = arr.filter(function(val) {
        return val[key] === true;
    })
    console.log(newArr);
}

//find
function find(arr, value) {
    const newArr = arr.filter(function(val) {
        return val === value;
    })
    console.log(newArr);
}

//findInObj
function findInObj(arr, key, value) {
    const newArr = arr.filter(function(val) {
        return val[key] === value;
    })
    console.log(newArr);
}

//removeVowels
function removeVowels(string) {
    const arrHolder = [];
    for(let letter of string) {
        arrHolder.push(letter.toLowerCase());
    }

    if(arrHolder.length === string.length) {
        finalString = '';
        arrHolder.forEach(function(val) {
            if('aeio'.includes(val)) {
                return;
            }
            else {
                finalString += val;
            }
        })
        return finalString;
    }
    console.log(finalString);
}

//doubleOddNumbers
function doubleOddNumbers(arr) {
    const newArr = arr.filter(function(val) {
        return (val % 2 !== 0);
    })

    const finalArr = newArr.map(function(val) {
        return(val*2);
    })
    console.log(finalArr);
}