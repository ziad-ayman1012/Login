var userName = document.querySelector('#userName');
var userMail = document.querySelector('#userMail');
var userPass = document.querySelector('#userPass');
var signUp = document.querySelector("#signUp");
var signIn = document.querySelector("#signIn");
var loginBtn = document.querySelector("#loginBtn");
var signUpBtn = document.querySelector("#signUpBtn");
var signUPContainer = document.querySelector('.signUPContainer');
var registUserMail = document.querySelector("#registUserMail");
var registUserPass = document.querySelector("#registUserPass");
var homePage = document.querySelector('.homePage');
var logoutBtn = document.querySelector("#logoutBtn");
var alertSuccess = document.querySelector('#alertSuccess');
var alertInvalid = document.querySelector('#alertInvalid');
var welcomeMessage = document.querySelector(".welcomeMessage");
var list = Array.from(JSON.parse(localStorage.getItem("usersList")));
var displayUserName = document.createElement("p");
displayUserName.setAttribute('id', 'welcomeUser');
var welcomeUser = document.getElementById('welcomeUser');








/*
should have 1 small letter,
*/



signUp.addEventListener('click', function (e) {
    signUPContainer.classList.remove('d-none');
    
})
signIn.addEventListener('click', function (e) {
    signUPContainer.classList.add('d-none');
    
})
signUpBtn.addEventListener('click', function (e) {
    
    for (var i = 0; i < list.length; i++) {
        if (list[i].name==userName.value &&
            list[i].email == registUserMail.value &&
            list[i].password==registUserPass.value
        ) {
            alertSuccess.classList.add('d-none');
            alertSuccess.nextElementSibling.classList.remove('d-none');
            signUpBtn.classList.add("disabled");
        } else {
            addUser();
             alertSuccess.classList.remove("d-none");
            alertSuccess.nextElementSibling.classList.add("d-none");
            signUpBtn.classList.remove('disabled');
      
        }
    }  
    
});
var userContainer;
if (localStorage.getItem('usersList') !== null) {
    userContainer = JSON.parse(localStorage.getItem("usersList"));
    
} else {
    userContainer = [];
}

function addUser() {
    var user = {
        name: userName.value,
        email: registUserMail.value,
        password: registUserPass.value,
    };
    userContainer.push(user);
    localStorage.setItem("usersList", JSON.stringify(userContainer));
    
}
loginBtn.addEventListener('click',function (e) {
    // checkUser();
    displayName();
    userLogIn();
    
})
function userLogIn() {
    
    

    for (var i = 0; i < list.length; i++) {
        if (
            list[i].email == userMail.value &&
            list[i].password == userPass.value
        ) {
            homePage.classList.remove("d-none");
            loginBtn.previousElementSibling.classList.remove('d-none');
            userPass.nextElementSibling.classList.add("d-none");
            displayUserName.classList.add("fs-1");
            var text = document.createTextNode(`Welcome ${list[i].name}`);
            displayUserName.appendChild(text);
            welcomeMessage.appendChild(displayUserName);
            break;
      
        } else {
            userPass.nextElementSibling.classList.remove('d-none');
            loginBtn.previousElementSibling.classList.add("d-none");
            homePage.classList.add('d-none');
        }
    }
}
function logInValidation(element) {
  var regex = {
    userMail: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z \s]{2,6})*$/,
    userPass: /^[a-zA-Z0-9._%-]{8,15}$/,
  };
  if (regex[element.id].test(element.value) == true) {
    element.classList.add("is-valid");
      element.classList.remove("is-invalid");
      
  } else {
    element.classList.remove("is-valid");
    element.classList.add("is-invalid");
  }
 
}
function displayName() {
    for (var i = 0; i < list.length; i++){
        if (list[i].email == userMail.value && list[i].password == userPass.value) {
            
            
            
        }
        
        
    }
    
}

// function checkUser() {
    
//     for (var i = 0; i < userContainer.length; i++){
//          if (
//            userContainer[i].email == userMail.value &&
//            userContainer[i].password == userPass.value
//          ) {
//            
//          } else {
//            x
//          }
        
//     }
    
// }

logoutBtn.addEventListener("click", function (e) {
    homePage.classList.add("d-none");
    welcomeUser.remove();
    userPass.nextElementSibling.classList.add('d-none');
    userPass.classList.remove('is-valid');
    userMail.classList.remove('is-valid');

  clearForm();
  localStorage.setItem("usersList", JSON.stringify(userContainer));
});

function clearForm() {
    userName.value = '';
    userMail.value = '';
    userPass.value = '';
    registUserMail.value = '';
    registUserPass.value = '';
    
}

function validateInputs(element) {
    var regex = {
      userName: /^[a-z \s a-z \s]{3,16}$/,
      registUserMail: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z \s]{2,6})*$/,
      registUserPass: /^[a-zA-Z0-9._%-]{8,15}$/,
    };
    if (regex[element.id].test(element.value) == true) {
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
        element.nextElementSibling.classList.add('d-none')
        signUpBtn.addEventListener('click', function (e) {
            alertSuccess.classList.remove("d-none");
            alertInvalid.classList.add("d-none");
            
            
            
        })
        
        
        
    } else {
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
        element.nextElementSibling.classList.remove("d-none");
        signUpBtn.addEventListener("click", function (e) {
            alertSuccess.classList.add("d-none");
            alertInvalid.classList.remove("d-none");
            
            
        });
        
        
    }

}
