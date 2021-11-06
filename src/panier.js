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

// function loop to show each value of the array as html
// function roundingThePrice (number) {
//     var quotient = myStorage[1].price;
//     var myPrice = quotient/1000;
//     myPrice = myPrice.toFixed(2)
//     return myPrice;
// }

function showShoppingCart(){
    
    var myShoppingCart = document.getElementById('shoppingCart');
    
    for (var i = 0; i < myStorage.length; i++) {
        localStorage.getItem(localStorage.key(myStorage))

        var quotient = myStorage[i].price;
        var myPrice = quotient/1000;
        myPrice = myPrice.toFixed(2);

    let template = `<div class="modified">
    <img src="" alt="img appareil foto" class="">
    <div class="body">
        <div class="title">${myStorage[i].name} 
            <span id="price">${myPrice}</span>
            <span id="quantity">${myStorage[i].option}</span>
        </div>
        <div class="text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div> 
        <button id="btnDeleteFromCart">Delete</button>  
    </div>
</div>`
        
        myShoppingCart.innerHTML += template
    }

}



allStorage();
parseArray(myStorage)
console.log(myStorage[1].price)
showShoppingCart()


{/* <div class="modified">
    <img src="../images/produit/vcam_1.jpg" alt="img appareil foto" class="">
    <div class="body">
        <div class="title">Appreil 1 
            <span id="price">50€</span>
            <span id="quantity">Quantités : 1</span>
        </div>
        <div class="text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div> 
        <button id="btnDeleteFromCart">Delete</button>  
    </div>
</div> */}

// function removeItem (index) {

// let myList = JSON.parse(localStorage.getItem("myList", "[]"));
// myList.splice(index, 1);
// localStorage.setItem("myList", JSON.stringify(myList));

// }



// var student = {
//     name : "evie",
//     age : "20",
//     job : "tech"
// }

// var studentStr = JSON.stringify(student);
// console.log(studentStr)

// var object = JSON.parse(studentStr);
// console.log(object)