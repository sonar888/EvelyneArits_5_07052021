console.log(localStorage);

function localStorageLoop(){
    for (var i = 0; i < localStorage.length; i++){
        localStorage.getItem(localStorage.key(i));
        i++ 
    };
}

console.log(localStorageLoop)
