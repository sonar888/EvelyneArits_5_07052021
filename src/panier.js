//This function show the elements in storage with the badge in the basket


function showElementsInStorage() {
    let inStorage = document.getElementById('inStorage')
    let elementsInStorage = localStorage.length
    inStorage.innerHTML = ``
    inStorage.innerHTML += `${elementsInStorage}`
      console.log(elementsInStorage)
}

showElementsInStorage()


//Returns all the elements of the local storage without knowing what the key value is and adds them to an array myStorage

var products = [];
var myStorage = [];


function allStorage() { 
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        myStorage.push(localStorage.getItem(keys[i]) );
    }
    return myStorage;
}


// Parse the myStorage array so that we can use te values stored
function parseArray (array) {
    for(var i = 0; i < array.length; i++) {

        array[i] = JSON.parse(array[i]);
    }
}


//Working with 3 arrays: myStorage, arrayIdAndPrice, products



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
  
  

//Displays the products added to the shopping cart
function showShoppingCart() {  

    if (myStorage.length > 0) { // if the cart is not empty

        for (var i = 0; i < myStorage.length; i++) {
            localStorage.getItem(localStorage.key(myStorage))
            var quotient = myStorage[i].price;
            var myPrice = quotient/1000;
            myPrice = myPrice.toFixed(2); 
    
    
            let template = `<tr id="demo${i}"><td  scope="row"><div>
            <img src="http://localhost:3000/images/vcam_${i+1}.jpg" class="img-fluid" alt="...">
          </div></td>
          <td class="col-3"><p class="text-align">${myStorage[i].name}</p></td>
          <td class="col-3">${myStorage[i].option}</td>
          <td class="col-2">${myPrice}</td>
          <td class="col-1"> 
            <button onclick="removeFromCart(${i})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
            </svg></button></td></tr>`
                        
            myShoppingCart.innerHTML += template;

            myPrice = parseFloat(myPrice)
            var newItem = new cameraIdAndPrice(myStorage[i]["_id"], myPrice);
            arrayIdAndPrice.push(newItem);
            products.push(myStorage[i]["_id"])
            console.log(products)
    
            sumPrices += myPrice;
            
    
        }

        sumPrices = sumPrices.toFixed(2)
        myTotal.innerHTML +=`<p>${sumPrices} € </p>`


    } else { // if the cart is empty

        basketIsEmpty() 
    }
}





//Call the functions to diplay the shopping cart elements in the DOM
allStorage();
parseArray(myStorage)
showShoppingCart()



//The function that removes elements from the shopping cart on click
function removeFromCart(value) {
    document.querySelector('#demo'+value).remove();

    let key = arrayIdAndPrice[value]['ItemId'];
    localStorage.removeItem(key)

    sumPrices -= arrayIdAndPrice[value]['ItemPrice']
    sumPrices = sumPrices.toFixed(2)

    products.splice(value,1)
    myStorage.splice(value,1)
        

    myTotal.innerHTML= `${sumPrices}`

    delete arrayIdAndPrice[value]
    console.log(products)

    showElementsInStorage()

    if (localStorage.length === 0) {
        basketIsEmpty()
    }

    
}


//Defines what to display on the page if the basket is empty

function basketIsEmpty() {
    let empty = document.getElementById('removeIfEmpty');
    empty.parentNode.removeChild(empty)

    let orderForm = document.getElementById('orderForm');
    orderForm.parentNode.removeChild(orderForm)

    let emptyBasket = document.getElementById('ifEmpty');
    emptyBasket.innerHTML = `<div id="emptyBasket">
    <div class="col-6 offset-3 border py-5 text-center" >
      <p>Votre panier est vide</p>
      <a href="../index.html">Cliquez-ici pour retourner sur le site</a>
    </div>
  </div>`

}


    
  

//Form validation

//Build the contact info for sending the order
class person { constructor (firstName, lastName, address, city, email) { 
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.email = email
    }
}



var submit = document.getElementById("submit-btn");
var form = document.getElementById('form-registration')
submit.addEventListener("click", verifyOrder)


function openForm() {
    let myForm = document.getElementById("orderForm")
    myForm.style.display = "block"
}

function closeForm() {
    let myForm = document.getElementById("orderForm")
    myForm.style.display = "none"
}


//Verify the values entered in the form
function verifyOrder (event) {
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
        const contact = new person(firstName, lastName, address, city, email);
        console.log(contact)
        let myOrder = {contact, products}
        let order = JSON.stringify(myOrder)
        

        sendOrder(order)

    }
}


//Send contact info and order details to the API
async function sendOrder(data){

    try {
        let content = await fetch('http://localhost:3000/api/cameras/order', {
            method: 'POST',
            body: data,
            headers: {
                'Content-type': 'application/json'
            }
        });

        let response = await content.json();
        console.log(response)
        sendToOrderPage(response)
        return response;

    } catch (e) {
        console.log('Error', e);
      }
}

// Display the API response oder_id to the user

function sendToOrderPage(order){
    let confirmationId = order.orderId
    console.log ('this is my order id' + ' ' + order.orderId)
    localStorage.clear()
    let url = `confirmation_page.html?id=${confirmationId}`
    window.location.href = url
}





