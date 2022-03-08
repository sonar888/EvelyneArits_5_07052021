
const grid = document.querySelector(".grid")
var displayInvoice = document.createElement('p')
displayInvoice.classList.add("invoice")
grid.appendChild(displayInvoice)


let invoiceNumber = Math.floor(Math.random() * 1000000)
displayInvoice.innerHTML = "Thank you for your purchase! Your invoice number is " + invoiceNumber




