
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
    
}
    
  





function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";

    
}


// Form validation

// let submit = document.getElementById("submit-btn")
// let isValid = false
// let contact = new Object()

// function processFrom() {
//     if (isValid) {
//         contact.fName = document.querySelector("#validationDefault01").value
//         contact.lName = document.querySelector("#validationDefault02").value
//         contact.address = document.querySelector("#validationDefault03").value
//         contact.city = document.querySelector("#validationDefault05").value
//         contact.email = document.querySelector("#validationDefault06").value
//         console.log(contact)
//     } else {
//         console.log("false")
//     }
    
// }

// submit.addEventListener("click", processFrom)







// https://www.codegrepper.com/code-examples/html/form+validation+javascript+bootstrap


// constructor (firstName, lastName, address, city, email ) { 
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.address = address;
//     this.city = city;
//     this.email = email
// }


// disable submit button until all fields are validated

// function validateForm() {
//     let firstName = document.forms["myForm"]["fname"].value;
//     if (firstName == "") {
//       alert("Name must be filled out");
//       return false;
//     }

//     let lastName = document.forms["myForm"]["lname"].value;
//     if (lastName == "") {
//       alert("Name must be filled out");
//       return false;
//     }

//     let address = document.forms["myForm"]["address"].value;
//     if (address == "") {
//       alert("Address must be filled out");
//       return false;
//     }

//     let city = document.forms["myForm"]["city"].value;
//     if (city == "") {
//       alert("City must be filled out");
//       return false;
//     }

//     let email = document.forms["myForm"]["email"].value;
//     if (email == "") {
//       alert("email must be filled out");
//       return false;
//     } 


//     console.log(typeof firstName)

//   }
    
//   function sendToConfirmationPage () {
//     validateForm()
//     console.log("form sent")
    
    
// }





// function buildContact() {



    
// }


// var contact = {
//     firstName: "John",
//     lastName: "Doe",
//     address: "Rue Fausse eau, 5, 5380",
//     city: "Namur",
//     email: "evelyne@gmail.com"
//   };

//   var product_id = ["5be1ed3f1c9d44000030b061", "5be9bc241c9d440000a730e7"]

//   let order = {contact, product_id}

//   let orderStr = JSON.stringify(order)
//   console.log(orderStr)