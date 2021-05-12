
async function getProduct() {
  try {
    let content = await fetch('http://localhost:3000/api/cameras/');
    let response = await content.json();
    console.log(response);
    displayProducts(response);
/*
    let elt = document.createElement('div');
    elt.innerHTML = content.join('<br />');

    document.getElementsByTagName('body')[0].appendChild(elt);*/
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
                    <h5 class="card-title"><a href="./pages/ours.html?${product._id}" class="card-link stretched-link">${product.title}</a></h5>
                    <p class="card-text">${product.description}s</p>
                </div>
            </div>
        </div>`

        row.innerHTML += template;

    }
}

getProduct();