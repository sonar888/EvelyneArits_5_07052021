
// let contact = new Object()
let order = []




//Validate the form before submitting


// let form = document.querySelectorAll(".needs-validation");
// let submit = document.getElementById("submit-btn")

var form = document.querySelector(".needs-validation");


	form.addEventListener ("submit", function(event)
	{
	if (!form.checkValidity())
		{
		event.preventDefault();
		event.stopPropagation();
		} else {
            form.classList.add("was-validated");
        }

        retrieveData(event)
		
	});






function retrieveData (event) {

if (form.classList.contains('was-validated')){
    event.preventDefault();
    const data = new FormData(event.target);
    const contact = Object.fromEntries(data.entries());
    console.log(contact);

} 
    else {console.log("the form is not valid")}
}


   // https://www.learnwithjason.dev/blog/get-form-values-as-json
// }

// retrieveData()


///////////


// var checkInput = Array.from(document.querySelectorAll("form input")) 

// function addEventToInput () {   
//     checkInput.forEach(input => {
//         input.addEventListener("change", check)   
//     })

// }



// const check = (e) => {
//     validateForm(e.target)   
// }

// function validateForm (input) {
//     if (input.value) {
//         input.classList.remove("is-invalid");
//         input.classList.add("is-valid");
//         validCheck++
//         console.log(validCheck)

    
       
        
//     } else {
//         input.classList.remove("is-valid");
//         input.classList.add("is-invalid");
//         validCheck--
//         console.log(validCheck)
       
//     } 
    

// }
      



// function submitForm() {
//     validationCheck ()
//     processFrom ()
// }

// function validationCheck() {
//     if (validCheck === 2) {
//         isValid = true        
//     } else {
//         console.log("bleh")
//     }
// }


// function processFrom() {
//     if (isValid) {
//         contact.fName = document.querySelector("#validationServer01").value
//         contact.lName = document.querySelector("#validationServer02").value
//         // contact.address = document.querySelector("#validationDefault03").value
//         // contact.city = document.querySelector("#validationDefault05").value
//         // contact.email = document.querySelector("#validationDefault06").value
//         console.log(contact)
//         order.push(contact)
//     } else {
//         console.log("false")
//     }
        
// }



// addEventToInput()
// submitForm()
// console.log(order)

// // function if class contains is invalid an is Valid is tru then error
 