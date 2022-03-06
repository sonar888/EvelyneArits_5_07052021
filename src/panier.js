
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



let arrayIdAndPrice = [];
let myShoppingCart = document.getElementById('shoppingCart');
let myTotal = document.getElementById("totalPurchase"); 
var sumPrices = 0;


class cameraIdAndPrice {
    constructor(id, price) {
      this.ItemId = id;
      this.ItemPrice = price;
    }
  }
  
  


function showShoppingCart(){  

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
                            <button id=${myStorage[i].name} onclick="removeFromCart(${i})">Delete</button>  
                        </div>
                    </div>`
        
        myShoppingCart.innerHTML += template;
        // storageId.push( myStorage[i]["_id"]);
        // prices.push(parseFloat(myPrice))

        
        
        myPrice = parseFloat(myPrice)
        var newItem = new cameraIdAndPrice(myStorage[i]["_id"], myPrice);
        arrayIdAndPrice.push(newItem);

        sumPrices += myPrice;
        

    }
    sumPrices = sumPrices.toFixed(2)
    myTotal.innerHTML +=`<p>${sumPrices}</p>`

    

}






allStorage();
parseArray(myStorage)
showShoppingCart()



function showTotalPrices(prices) {
    for (let i = 0; i < prices.length; i++ ) {
        sumPrices += prices[i]["ItemPrice"];

        var result = Number(sumPrices).toFixed(2);
        myTotal.innerHTML= `<p>${result}<p/>`

    }
}



function removeFromCart(value) {
    var myobj = document.getElementById("demo"+value);
    myobj.remove();

    let key = arrayIdAndPrice[value]['ItemId'];
    localStorage.removeItem(key)

    sumPrices -= arrayIdAndPrice[value]['ItemPrice']
    sumPrices = sumPrices.toFixed(2)

    

    myTotal.innerHTML= `${sumPrices}`

    delete arrayIdAndPrice[value]
    console.log(arrayIdAndPrice)
    

    
    
    // if (arrayIdAndPrice.length > 1 ) {
    //     let key = arrayIdAndPrice[value]['ItemId'];
    //     console.log(key)
    //     arrayIdAndPrice.splice(value, 1)
    //     // localStorage.removeItem(key)
    //     //showTotalPrices(arrayIdAndPrice);
    // } else {
    //     arrayIdAndPrice = []
    //     // localStorage.clear()
    //     myTotal.innerHTML = "0.00"
    // }
    


}



// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX





function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
}




// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// var storageId = [];
// var prices = [];

// function showShoppingCart(){
    
//     var myShoppingCart = document.getElementById('shoppingCart');
    
//     for (var i = 0; i < myStorage.length; i++) {
//         localStorage.getItem(localStorage.key(myStorage))
//         var quotient = myStorage[i].price;
//         var myPrice = quotient/1000;
//         myPrice = myPrice.toFixed(2); 
        
        

//     let template = `<div class="modified" id="demo${i}" >
//                         <img src="" alt="img appareil foto" class="">
//                         <div class="title">${myStorage[i].name} 
//                             <span id="price">${myPrice}</span>
//                             <span id="quantity">${myStorage[i].option}</span>
//                         </div>
//                         <div class="body">
                           
//                             <div class="text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//                             </div> 
//                             <button id=${myStorage[i].name} onclick="removeFromCart(${i})">Delete</button>  
//                         </div>
//                     </div>`
        
//         myShoppingCart.innerHTML += template;
//         storageId.push( myStorage[i]["_id"]);
//         prices.push(parseFloat(myPrice))
//     }

// }

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX