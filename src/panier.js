// console.log(localStorage);
// var json = '{"name":"Zurss 50S","price":49900,"_id":"5be1ed3f1c9d44000030b061","option":"50mm 1.6"}'
// var test = JSON.parse(json)
// console.log(json)
var myStorage = [];

function allStorage() { //returns all the elements of the local storage without knowing what the key value is
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        myStorage.push(localStorage.getItem(keys[i]) );
    }
    return myStorage;
}

function parseArray (array) {
    for(var i = 0; i < array.length; i++) {

        array[i] = JSON.parse(array[i]);
    }
}

var storageId = [];
var prices = [];

function showShoppingCart(){
    
    var myShoppingCart = document.getElementById('shoppingCart');
    
    for (var i = 0; i < myStorage.length; i++) {
        localStorage.getItem(localStorage.key(myStorage))
        var quotient = myStorage[i].price;
        var myPrice = quotient/1000;
        myPrice = myPrice.toFixed(2); 
        
        

    let template = `<div class="modified" id="demo${i}" >
                        <img src="" alt="img appareil foto" class="">
                        <div class="title">${myStorage[i].name} 
                            <span id="price">${myPrice}</span>
                            <span id="quantity">${myStorage[i].option}</span>
                        </div>
                        <div class="body">
                           
                            <div class="text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </div> 
                            <button id=${myStorage[i].name} onclick="myFunction(${i})">Delete</button>  
                        </div>
                    </div>`
        
        myShoppingCart.innerHTML += template;
        storageId.push( myStorage[i]["_id"]);
        prices.push(parseFloat(myPrice))
    }

}



allStorage();
parseArray(myStorage)
showShoppingCart()

function myFunction(value) {
    var myobj = document.getElementById("demo"+value);
    myobj.remove();

    let key = storageId[value];

    localStorage.removeItem(key)
}

function showTotalPrices (storagePrices) {
    let sumPrices = 0;
    for (let i = 0; i < storagePrices.length; i++ ) {
        sumPrices += storagePrices[i];
    }
    sumPrices = sumPrices.toFixed(2)
    console.log(sumPrices);
    var myTotal = document.getElementById("totalPurchase");
    let totalDisplay = `<p>${sumPrices}</p>`
    myTotal.innerHTML += totalDisplay;

}

showTotalPrices(prices);

