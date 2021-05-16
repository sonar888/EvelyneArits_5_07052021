
async function getProduct() {
  try {
    let content = await fetch('http://localhost:3000/api/cameras/');
    let response = await content.json();
    console.log(response);
    displayProducts(response);
  } catch (e) {
    console.log('Error', e);
  }
}


function displayProducts(products) {
    let row = document.getElementById("products");
    for(let product of products) {
        let template = `
        <div class="col-12 col-lg-6">
            <div class="card mb-2 mt-2">
                <img src="${product.imageUrl}" alt="${product.name}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title"><a href="./pages/produit.html" class="card-link stretched-link" id="${product._ID}">${product.name}</a></h5>
                    <p class="card-text">${product.description}s</p>
                </div>
            </div>
        </div>`

        row.innerHTML += template;

    }
}

getProduct()

let productID = document.getElementById("${product._ID}")

productID.addEventListener('click', function createTheRedirection(productID) {


} )


// Une fonction qui lors du click sur le lien, récupère le product_id
// Fetch avec le product_id
// exporter la fonction fetch_id et importer dans 2e fichier

// Test import/export


