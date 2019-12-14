// var createAccountBtn = document.getElementById("createAccountBtn")


function openCreateAccountForm() {
    var signUpForm = document.getElementById("signUpForm");
    var loginForm = document.getElementById("loginForm")
    signUpForm.style.display = "block";
    loginForm.style.display = "none";
}

function openLoginForm() {
    var signUpForm = document.getElementById("signUpForm");
    var loginForm = document.getElementById("loginForm");
    signUpForm.style.display = "none";
    loginForm.style.display = "block";
}