// Retrieve the selected product id to use in the functions

function getID(ID){
  let callID = new URLSearchParams(window.location.search);
  return callID.get(ID);
}


const id = getID('id');
console.log(id);


// This function should retrieve the selected camera's information from the API

async function getProduct() {
  try {
    let content = await fetch("http://localhost:3000/api/cameras/"+id);
    let response = await content.json();
    // console.log(response);
    displayProduct(response); //We use the API response to display the selected product information
    return response;
  } catch (e) {
    console.log('Error', e);
  }
}

// Callback function that displays the selected product information in the DOM

function displayProduct(product) {

  var quotient = product.price;
  var myPrice = quotient/1000;
  myPrice = myPrice.toFixed(2);

  let row = document.getElementById("SelectedProduct");
  let template = `
  <div class="col-12 col-lg-6">
                <img src="${product.imageUrl}" alt="${product.name} ${product._id}" class="card-img">
              </div>
              <div class="col-12 col-lg-6 card">
                <div class="card-body">
                  <h5 class="card-title pb-2">${product.name}</h5>
                  <h6 class="card-subtitle pb-1">${myPrice}€</h6>
                  <div class="card-text py-3">
                      <label for="select-lense">Lentilles</label>
                      <select name="lenses" id="select-lense">
                          <option value="" >Choisissez votre lentille</option>
                          
                      </select>
                  </div>
                  <button type="button" id="btnAddToCart" class="btn btn-primary mt-3">Ajouter au panier</button>
                </div>
              </div>
              <div  class=" col-12 mt-2 mb-4">
                  <h5 class="card-title pt-3">Description</h5>
                  <p class="card-text">${product.description}</p>
              </div>`

  row.innerHTML += template;
  lenseChoice(product.lenses); //Callback function to display the different lense choises
}


// Display the lense choise by looping through an array
function lenseChoice(lenses) {
  var option = document.getElementById("select-lense");
  
  for (let lense of lenses){
    option.innerHTML += `<option value="${lense}">${lense}</option>`
  }

}

// Register the selected lense choice

function getSelectedLenseChoice() {
  var options = document.getElementById("select-lense");
  
  for (let option of options){
    if(option.selected) {
      console.log(option.value);
      return option.value;
    }
    
  }
}


//Call teh function to display the products; then build the camera object when the user clicks on "add to cart" button
getProduct()
  .then(function(product) {
    let btnAddToCart = document.getElementById('btnAddToCart');
    btnAddToCart.addEventListener('click', function () {
      console.log(product)     
        class addedCamera {
          constructor (name, price, _id, option, description, imageUrl) { 
            this.name = name;
            this.price = price;
            this._id = id;
            this.option = option;
            this.description = description;
            this.imageUrl = imageUrl;
          }
        };

        //Build camera object with product name, price, id, selected option, description and image
        let cameraAddedToBasket = new addedCamera(product.name, product.price, id, getSelectedLenseChoice(), product.description, product.imageUrl);
    
        console.log(cameraAddedToBasket);
        
        let cameraAddedToBasket_stringified = JSON.stringify(cameraAddedToBasket);
        

        // Add the choice to the local storage
        const storeCamera  = [];
        storeCamera.push(cameraAddedToBasket_stringified);
        localStorage.setItem(id, storeCamera);
        
        alert("Le produit a été ajouté au panier") // need to change this: design check ccs?
        console.log(localStorage)
    })
  });

