(function ($) {
    "use strict";
    var mainApp = {

        main_fun: function () {



            $("a.preview").prettyPhoto({
                social_tools: false
            });

        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainApp.main_fun();
    });

}(jQuery));



var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        // slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    //slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

// takes the ids and creates it as variables

let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let finalUser = JSON.parse(localStorage.getItem('users'));


// the user is able to register to the website
function addUser(e) {

    // checking that all the fields are filled as required
    if (username.value === "" || email.value === "" || password.value === "") {
        alert("Kindly complete all fields");
        return false;
    }


    let allUsers = {
        usernameAll:username.value,
        emailAll: email.value,
        passwordAll: password.value,
    }

    let indUser = [];
    if (localStorage.getItem('users') == null) {
        indUser.push(allUsers);
        localStorage.setItem('users', JSON.stringify(indUser))
    } else {
        indUser = JSON.parse(localStorage.getItem('users'));
        indUser.push(allUsers);
        localStorage.setItem('users', JSON.stringify(indUser))
    }
    console.log(indUser);
     alert('Registration completed, kindly log in')
    window.open("login.html")
    //e.preventDefault()
};

//logout
const leave =document.querySelector("#logout");

leave.addEventListener("click", ()=>{
    alert("Logged out")
    window.open("login.html")
})


