let submit = document.getElementById("submit-btn")
let isValid = false
let contact = new Object()
let validCheck = 0
let order = []

var checkInput = Array.from(document.querySelectorAll("form input")) 

function addEventToInput () {   
    checkInput.forEach(input => {
        input.addEventListener("change", check)   
    })

}



const check = (e) => {
    validateForm(e.target)
    
    
}

function validateForm (input) {
    if (input.value) {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        validCheck++
        console.log(validCheck)

    
       
        
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        validCheck--
        console.log(validCheck)
       
    } 
    

}
      



function submitForm() {
    validationCheck ()
    processFrom ()
}

function validationCheck() {
    if (validCheck === 2) {
        isValid = true        
    } else {
        console.log("bleh")
    }
}


function processFrom() {
    if (isValid) {
        contact.fName = document.querySelector("#validationServer01").value
        contact.lName = document.querySelector("#validationServer02").value
        // contact.address = document.querySelector("#validationDefault03").value
        // contact.city = document.querySelector("#validationDefault05").value
        // contact.email = document.querySelector("#validationDefault06").value
        console.log(contact)
        order.push(contact)
    } else {
        console.log("false")
    }
        
}



addEventToInput()
submitForm()
console.log(order)

// function if class contains is invalid an is Valid is tru then error
 