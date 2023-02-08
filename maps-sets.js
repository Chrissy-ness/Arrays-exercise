//Quick Question #1
//it returns {1,2,3,4}

//Quick Question #2
//it returns "ref"

//Quick Question #3
//m will look like this:
// {
// 0: {[1,2,3] => true}
// 1: {[1,2,3] => false}
//}

//hasDuplicate
const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

//vowelCount 
const vowelCount = ([...string]) => {
    const vowels = 'aeiou';
    const finalMap = new Map();
    for(let char of string) {
        let tempChar = char.toLowerCase();
        if(vowels.includes(tempChar)) {
            if(finalMap.has(tempChar)) {
                finalMap.set(tempChar, finalMap.get(tempChar)+1);
            }
            else finalMap.set(tempChar, 1)
        }
    }
    return finalMap;
}