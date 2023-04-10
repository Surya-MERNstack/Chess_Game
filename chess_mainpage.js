

window.addEventListener('load' , () => {
      const loader = document.querySelector('.loader');

      loader.classList.add('loader-hidden');

      loader.addEventListener('transitionend', () => {
         document.body.removeChild('loader')
      })
})

 function inputfiled () {
     let details = document.getElementById('input').value

     if(details === "") {
         alert('Enter the details')
     }else{
        alert('details Saved')
     }
 }

// function validateForm() {
//     // Get the form input values
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let gender = document.querySelector('input[name="gender"]:checked');
//     let state = document.getElementById("state").value;
    
//     // Check if all the required fields are filled
//     if (name === "" || email === "" || gender === null || state === "") {
//       alert("Please fill all the required fields.");
//       return false;
//     }
    
//     // Submit the form if all the required fields are filled
//     alert("Details saved.");
//     return true;
//   }
  