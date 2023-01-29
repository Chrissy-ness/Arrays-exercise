//extractValue
function extractValue(arr, key){
    return arr.reduce(function(acc, next) {
        acc.push(next[key]);
        return acc;
    },[]);
}

//vowelCount
function vowelCount(string) {
    const vowels = 'aeiou'
    const arr = string.split('');
    return arr.reduce(function(acc, next) {
        let smallVowel = next.toLowerCase();
        if(vowels.includes(smallVowel)) {
            if(acc[smallVowel]) {
                acc[smallVowel] += 1;
            }
            else {
                acc[smallVowel] = 1;
            }
        }
        return acc;
    },{});
}

//addKeyAndValue 
function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(acc, next, idx) {
        acc[idx][key] = value;
        return acc;
    }, arr);
}




//partition
function partition(arr, callback) {
    return arr.reduce(function(acc, next) {
        if(callback(next)) {
            acc[0].push(next);
        }
        else {
            acc[1].push(next);
        }
        return acc;
    },[[],[]]);
}





