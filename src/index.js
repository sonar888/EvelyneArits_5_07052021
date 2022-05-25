//This function show the elements in storage with the badge in the basket
function showElementsInStorage() {
  let inStorage = document.getElementById('inStorage')
  let elementsInStorage = localStorage.length
  inStorage.innerHTML = ``
  inStorage.innerHTML += `${elementsInStorage}`
}

showElementsInStorage()


// This function should retrieve the cameras from the API
const myURL = 'http://localhost:3000/api/cameras/'

async function getProduct() {
  try {
    let content = await fetch(myURL);
    let response = await content.json();
    displayProducts(response); //We use the API response to display the different products
  } catch (e) {
    console.log('Error', e);
  }
}

// Callback function that displays the different products in the DOM

function displayProducts(products) {
    let row = document.getElementById("products");
    for(let product of products) {

      // Displays the products in the DOM, html code. Also displays the id of each product in the URL to retrieve the user's choice in the file produit.js
        let template = `
        <div class="col-12 col-lg-6">
            <div class="card mb-2 mt-2">
                <img src="${product.imageUrl}" alt="${product.name}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title"><a href="./pages/produit.html?id=${product._id}" class="card-link link-secondary" id="${product._id}">${product.name}</a></h5>
                    <p class="card-text">${product.description}s</p>
                </div>
            </div>
        </div>`

        row.innerHTML += template;

    }
}


//Call the function

getProduct()


