const txtPassword = document.querySelector("#password");
const txtPasswordConfirm = document.querySelector("#passwordConfirm");

txtPassword.addEventListener("keyup", validatePasswords);
txtPasswordConfirm.addEventListener("keyup", validatePasswords);

function validatePasswords(event) {

    if (txtPassword.value === txtPasswordConfirm.value) {
        txtPasswordConfirm.classList.remove("no-match");
    } else {
        txtPasswordConfirm.classList.add("no-match");
    }
}

