const newUsername = document.getElementById('username');
const newPassword = document.getElementById('password');
let finalUser = JSON.parse(localStorage.getItem('users'));

let signIn = document.querySelector("#login");
signIn.addEventListener("click", () => {
    const filArr = finalUser.filter(user =>
        user.usernameAll == newUsername.value && user.passwordAll == newPassword.value)
    // window.location.href = "log.html"
    console.log(filArr)
    if (filArr.length > 0) {
        alert(`Welcome, you are now logged in`)
        window.open("home.html");
    } else {
        alert('username or password incorrect')
    }
})