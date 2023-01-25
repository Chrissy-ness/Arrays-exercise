//findUserByUsername
function findUserByUsername(arr, username) {
    const result = arr.find(function(user) {
        return user.username === username
    })
    console.log(result); 
}

//removeUser 
function removeUser(arr, username) {
    const returnedVal = arr.findIndex(function(user) {
        return user.username === username;
    })
    if(returnedVal === -1) {
        return;
    }
    return arr.splice(returnedVal, 1)[0];
}
