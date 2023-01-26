//findUserByUsername
function findUserByUsername(arr, username) {
    const result = arr.find(function(user) {
        return user.username === username
    })
    console.log(result); 
}

//removeUser 
function remover(arr, username) {
    const result = arr.findIndex(function(user) {
        return user.username === username;
    })
    if(result === -1) {
        return undefined;
    }
    arr.splice(result, 1);
    console.log(arr);
}