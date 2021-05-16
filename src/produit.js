


async function getProduct() {
  try {
    let content = await fetch('http://localhost:3000/api/cameras/5be1ed3f1c9d44000030b061');
    let response = await content.json();
    console.log(response);
    displayProduct(response);
  } catch (e) {
    console.log('Error', e);
  }
}

function displayProduct(product) {
  let row = document.getElementById("SelectedProduct");
  let template = `
  <div class="col-12 col-lg-6">
    <img src="${product.imageUrl}" alt="${product.name}" class="card-img">
  </div>
  <div class="col-12 col-lg-6 card">
    <div class="card-body">
      <h5 class="card-title">${product.name}</h5>
      <h6 class="card-subtitle">${product.price}</h6>
      <div class="card-text">
          <label for="select-lense">Lentilles</label>
          <select name="lenses" id="select-lense">
              <option value="" id="option">Choisissez votre lentille</option>
              
          </select>
      </div>
      <button type="button" class="btn btn-primary"><a href="panier.html" class="card-link btn">Ajouter au panier</a></button>
    </div>
  </div>
  <div  class="card col-12">
      <h5 class="card-title">Description</h5>
      <p class="card-text">${product.description}</p>
  </div>`

  row.innerHTML += template;
}


function lenseChoice(lenses) {
  let option = document.getElementsByID("option");
  
  for (let option of lenses){
    option.innerHTML = `<option value="${product._id}">${product._id}</option>`
  }

}

getProduct()
lenseChoice(lenses)





// let firstOption = document.getElementById("option1");
//   let secondOption = document.getElementById("option2");
//   firstOption = [0]
//   secondOption = [1]
