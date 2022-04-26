var products = [];
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
  
  


function showShoppingCart() {  

    if (myStorage.length > 0) {

        for (var i = 0; i < myStorage.length; i++) {
            localStorage.getItem(localStorage.key(myStorage))
            var quotient = myStorage[i].price;
            var myPrice = quotient/1000;
            myPrice = myPrice.toFixed(2); 
    
    
            let template = `<div class="card mb-3" id="demo${i}" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="http://localhost:3000/images/vcam_${i+1}.jpg" class="img-fluid rounded float-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${myStorage[i].name}</h5>
                  <p class="card-text">${myStorage[i].description}</p>
                  <p class="card-text"><small class="text-muted">Lense: ${myStorage[i].option}</small></p>
                  <p class="card-text"><small class="text-muted">Price: ${myPrice}</small></p>
                  <button type="button" class="btn btn-secondary" onclick="removeFromCart(${i})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"></path>
                  <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"></path>
                  </svg></button>
                </div>
              </div>
            </div>
          </div>`
            
            
    
    //     let template = `<div class="modified" id="demo${i}" >
    //                         <img src="http://localhost:3000/images/vcam_${i}.jpg"  alt="img appareil foto">
    //                         <div class="title">${myStorage[i].name} 
    //                             <span id="price">${myPrice}</span>
    //                             <span id="quantity">${myStorage[i].option}</span>
    //                         </div>
    //                         <div class="body">
                                
    //                             <div class="text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    //                             </div> 
    //                             <button type="button" class="btn btn-secondary" onclick="removeFromCart(${i})">
    //                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
    //   <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"></path>
    //   <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"></path>
    // </svg></button>  
    //                         </div>
    //                     </div>`   
            
            myShoppingCart.innerHTML += template;
            // storageId.push( myStorage[i]["_id"]);
            // prices.push(parseFloat(myPrice))
    
            
            
            myPrice = parseFloat(myPrice)
            var newItem = new cameraIdAndPrice(myStorage[i]["_id"], myPrice);
            arrayIdAndPrice.push(newItem);
            products.push(myStorage[i]["_id"])
            console.log(products)
    
            sumPrices += myPrice;
            
    
        }
        sumPrices = sumPrices.toFixed(2)
        myTotal.innerHTML +=`<p>${sumPrices} € </p>`


    } else {

        basketIsEmpty()
    }

    

    

}






allStorage();
parseArray(myStorage)
showShoppingCart()



// function showTotalPrices(prices) {
//     for (let i = 0; i < prices.length; i++ ) {
//         sumPrices += prices[i]["ItemPrice"];

//         var result = Number(sumPrices).toFixed(2);
//         myTotal.innerHTML= `<p>${result}<p/>`

//     }
// }



function removeFromCart(value) {
    var myobj = document.getElementById("demo"+value);
    myobj.remove();

    let key = arrayIdAndPrice[value]['ItemId'];
    localStorage.removeItem(key)

    sumPrices -= arrayIdAndPrice[value]['ItemPrice']
    sumPrices = sumPrices.toFixed(2)

    products.splice(value,1)
    myStorage.splice(value,1)
        

    myTotal.innerHTML= `${sumPrices}`

    delete arrayIdAndPrice[value]
    console.log(products)

    if (myStorage.length === 0) {
        basketIsEmpty()
    }
    // console.log(myStorage)
    
}

function basketIsEmpty() {
    let empty = document.getElementById('removeIfEmpty');
    empty.parentNode.removeChild(empty)

    let orderForm = document.getElementById('orderForm');
    myForm.parentNode.removeChild(myForm)

    let emptyBasket = document.getElementById('ifEmpty');
    emptyBasket.innerHTML = `<p>Your basket is empty</p>
    <a href="../index.html">Click here to go back to shopping</a>`

}
    
  

//Form validation



// function openForm() {
//     document.getElementById("myForm").style.display = "block";
// }
  
// function closeForm() {
//     document.getElementById("myForm").style.display = "none";
   
// }


class contact { constructor (firstName, lastName, address, city, email) { 
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.email = email
    }
}



var submit = document.getElementById("submit-btn");
var form = document.getElementById('form-registration')
submit.addEventListener("click", function(event){
    event.preventDefault();
    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let address = document.getElementById('address').value
    let city = document.getElementById('city').value
    let email = document.getElementById('email').value

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if (!firstName || !lastName || !address || !city || (!email || !email.match(validRegex))) {
        console.log('failed')
        form.classList.add("was-validated")
		
    } else {
        const person = new contact(firstName, lastName, address, city, email);
        console.log(person)
        sendOrder()

    }


  
});



// function ValidateEmail() 
// {
//  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
//   {
//     return (true)
//   }
//     alert("You have entered an invalid email address!")
//     return (false)
// }
    

function sendOrder () {
    console.log ("order sent")
}


// var contact

// function retrieveData (event) {

//     event.preventDefault();

//     const data = new FormData(event.target);
//     contact = Object.fromEntries(data.entries());
//     console.log(contact);

//     // createOrder()
//     // sendOrder()
// }



// let order

// function sendOrder () {
    // let orderNat
    // orderNat = contact+product_id;

    // order = JSON.stringify(orderNat)

    // console.log(order)  



//     const Url = 'http://localhost:3000/api/cameras/order';

// const Data = 
// contact: {
//     firstName:"Evelyne",
//     lastName:"Arits",
//     email:"evelyne.arits162@gmail.com",
//     Address:"31 Manor Avenue",
//     City:"Cork"
//  }
//     products : ["5be1ef211c9d44000030b062", "5be9bc241c9d440000a730e7","5be1ed3f1c9d44000030b061"]
    
    


// const othePram = {
    
//     body:Data,
//     method:"POST"

// }

// fetch(Url, othePram)
// .then(data => {return data.json()})
// .then(res => {console.log(res)})
// .catch(error =>{console.log(error)} )

// }




// const obj = {hello: 'world'};

// const request = new Request('http://localhost:3000/api/cameras/order', {
//   method: 'POST',
//   body: JSON.stringify(obj)
//  });

// request.json().then(function(data) {
//   // do something with the data sent in the request
//   console.log(data)
// });




// To do

// 1. Function to retrieve order
// 2. create order + contact info 
// 3. send through API 







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