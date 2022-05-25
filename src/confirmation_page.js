//Retrieve the order ID frm the URL

function getID(ID){
    let callID = new URLSearchParams(window.location.search);
    return callID.get(ID);
  }
  
  
  const orderID = getID('id');
  
//Display the order ID to the customer

function displayOrderConfirmation(order) {

    let orderDisplay = document.getElementById('yourOrder')

    let template = `<div  class="card col-10 offset-1">
    <div class="card-header">
      Transaction réussie!
    </div>
    <div class="card-body">
      <h5 class="card-title">Orinoco et son équipe vous remercient de votre achat!</h5>
      <p class="card-text">Voici l'identifiant de confirmation de votre commande: ${order}, utilisez-le si vous devez nous contacter.</p> 
    </div>
  </div>
  <a href="../index.html" class="btn btn-primary text-center col-2 my-5 mx-auto ">Retour vers le site</a>
`

    orderDisplay.innerHTML = template
}

displayOrderConfirmation(orderID)