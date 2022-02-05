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
    }

}


var myArray = 


//a function that removes the item from the localstorage, then reload the cart


// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_remove


allStorage();
parseArray(myStorage)
// storeId();
// console.log(myStorage)
showShoppingCart()
// console.log(storageId)



// un tableau avec id demo + valeur id produit et ensuite value dans my function(i) demi+i et on supprime du storage 

function myFunction(value) {
    var myobj = document.getElementById("demo"+value);
    myobj.remove();

    let key = storageId[value];

    localStorage.removeItem(key)


}

// https://www.py4u.net/discuss/281528



//   const elem = document.querySelector('time');

// // select closest <div>
// const div = elem.closest('div');

// console.log(div.classList[0]); // meta


{/* <article>
    <h2 class="title">How to learn JavaScript</h2>
    <div class="meta">
        <p class="subtitle">12 tips to learn JavaScript quickly and free.</p>
        <time class="published">August 21, 2019</time>
    </div>
</article> */}

// var buttons = document.querySelectorAll('button');

// for (var i=0; i<buttons.length; ++i) {
//   buttons[i].addEventListener('click', clickFunc);
// }

// function clickFunc() {
//     var myId = this.id;
// }







// console.log(localStorage)


// window.onbeforeunload = function() {
//     localStorage.setItem("first_name", $('#inputName').val());
// };



// window.onload = function() {
//     var name = localStorage.getItem("first_name");
//     if (name !== null) {
//         $('#inputName').val(name);
//         alert(name);
//     }
// };


// function clearStorage(){
// alert('localstorage cleared!');
// localStorage.removeItem('first_name');
// }


// <input type="text" id="inputName" placeholder="Name" required>
// <button onclick="clearStorage()">clear</button>




// var btnDelete = document.getElementById("shoppingCart").getElementsByTagName("button");
// console.log(btnDelete.length)

// function deleteFromCart() {
//     var myObj = document.getElementById(templateToRemove);
//     console.log(myObj)
//     myObj.remove();
    
// }


// for (i = 0; i < btnDelete.length; i++ ){
//     btnDelete[i].onclick = deleteFromCart;
//   }




// var myVar;
// myVar = 'test';

// document.getElementById(myVar);

// function addIdToButton () {
//     var buttons = document.getElementsByTagName('button');
//     for (var i = 0; i < buttons.length; i++) {
//         var button = buttons[i];
//         button.setAttribute("id", i+1)
//     }

// }

// function addIdToButton () {
//     var buttons = document.getElementsByTagName('button');
//     for (var i = 0; i < buttons.length; i++) {
//         var button = buttons[i];
//         button.setAttribute("id", i+1)
//     }

// }


        // // Getting the table element
        // var tables = document
        //     .getElementsByTagName("table");
 
        // // Looping over tables
        // for (var i = 0; i < tables.length; i++) {
 
        //     // Get the ith table
        //     var table = tables[i];
 
        //     // Set the id dynamically
        //     table.setAttribute("id", i + 1);
 
        //     // The line below will also give id
        //     // dynamically to the tables
        //     //table.id = i+1;
        // }



// function deleteFromCart() {
//     var myShoppingCart = document.getElementById('shoppingCart');
//     var parent = document.getElementsByClassName('parent')

//     btnDelete.addEventListener('click', function () {
//         parent.parentNode.removeChild(parent);
//     })
// }

// deleteFromCart();



// function deleteFromCart(){
    
//     var myShoppingCart = document.getElementById('shoppingCart');
    
    
//     for (var i = 0; i < myStorage.length; i++) {
//         var btnDelete = document.getElementById('btnDelete');
//         btnDelete.addEventListener('click', function () {
//             var parent = document.getElementById('parent');
//             parent.parentNode.removeChild(parent);
//         }

//         )

    // let template = `<div class="modified" id="parent">
    //                     <img src="" alt="img appareil foto" class="">
    //                     <div class="body">
    //                         <div class="title">${myStorage[i].name} 
    //                             <span id="price">${myPrice}</span>
    //                             <span id="quantity">${myStorage[i].option}</span>
    //                         </div>
    //                         <div class="text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    //                         </div> 
    //                         <button id="btnDelete">Delete</button>  
    //                     </div>
    //                 </div>`
        
    //     myShoppingCart.innerHTML += template
//     }
// }

// deleteFromCart();
// try instead to remove from local storage and reload with the function

// But there are multiple ways to go about this. Just load the local storage back into a list / array, delete an item from the collection and put it back into local storage. Or have the class automatically update data in the local storage.
// Well, there are a lot of issues with this code. First, you're probably repeating some ids on some elements. Every id needs to be unique, otherwise you won't be able to get elements using getElementById. It is common practice to prepend the value of the id with a keyword that means what exactly the element is.
// function deleteFromCart () {
//     var parent = document.getElementById('parent')
//     parent.parentNode.removeChild(parent);
// }




// btnDelete.addEventListener('click', function () {
//  deleteFromCart()
// })





// btnDelete[0].addEventListener('click', function () {
// // btnDelete.parentElement.remove()
// btnDelete.parentNode.removeChild(btnDelete)
// // localStorage.removeItem('name');

// })

// adapt code below
// var comment = document.getElementsByClassName("button");

// function showComment() {
//   var place = document.getElementById('textfield');
//   var commentBox = document.createElement('textarea');
//   place.appendChild(commentBox);
// }




// elem.parentNode.removeChild(elem);



























//function delete_row(e) {
//     e.parentElement.remove();
// }

// function delete_row(e) {
//     e.parentElement.remove();
// }

// function delete_row(e)
// {
//     e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
// }


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