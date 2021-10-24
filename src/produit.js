
function getID(ID){
  let callID = new URLSearchParams(window.location.search);
  return callID.get(ID);
}


const id = getID('id');
console.log(id);



async function getProduct() {
  try {
    let content = await fetch("http://localhost:3000/api/cameras/"+id);
    let response = await content.json();
    // console.log(response);
    displayProduct(response);
    return response;
  } catch (e) {
    console.log('Error', e);
  }
}

function displayProduct(product) {
  let row = document.getElementById("SelectedProduct");
  let template = `
  <div class="col-12 col-lg-6">
    <img src="${product.imageUrl}" alt="${product.name} ${product._id}" class="card-img">
  </div>
  <div class="col-12 col-lg-6 card">
    <div class="card-body">
      <h5 class="card-title">${product.name}</h5>
      <h6 class="card-subtitle">${product.price}</h6>
      <div class="card-text">
          <label for="select-lense">Lentilles</label>
          <select name="lenses" id="select-lense">
              <option value="" >Choisissez votre lentille</option>
              
          </select>
      </div>
      <button type="button" id="btnAddToCart" class="btn btn-primary">Ajouter au panier</button>
    </div>
  </div>
  <div  class="card col-12">
      <h5 class="card-title">Description</h5>
      <p class="card-text">${product.description}</p>
  </div>`

  row.innerHTML += template;
  lenseChoice(product.lenses);
}



function lenseChoice(lenses) {
  var option = document.getElementById("select-lense");
  
  for (let lense of lenses){
    option.innerHTML += `<option value="${lense}">${lense}</option>`
  }

}

function getSelectedLenseChoice() {
  var options = document.getElementById("select-lense");
  
  for (let option of options){
    if(option.selected) {
      console.log(option.value);
      return option.value;
    }
    
  }
}



getProduct()
  .then(function(product) {
    let btnAddToCart = document.getElementById('btnAddToCart');
    btnAddToCart.addEventListener('click', function () {
      console.log(product)     
        class addedCamera {
          constructor (name, price, _id, option ) { 
            this.name = name;
            this.price = price;
            this._id = id;
            this.option = option ;
          }
        };
        let cameraAddedToBasket = new addedCamera(product.name, product.price, id, getSelectedLenseChoice());
    
        console.log(cameraAddedToBasket);
        
        let cameraAddedToBasket_stringified = JSON.stringify(cameraAddedToBasket);
  
        const storeCamera  = [];
        storeCamera.push(cameraAddedToBasket_stringified);
        localStorage.setItem(product.name, storeCamera);
        
        alert("Your item has been added to the basket") // need to change this: design check ccs?
    })
  });

