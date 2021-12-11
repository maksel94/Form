const inputPassword = document.querySelector(".passwors");
const errorMessagePassword = document.querySelector(".error_message");

const isValidEmail = (email) => {
    return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
    email
    );
};

inputPassword.addEventListener("blur", (event) => {
    const valid = isValidEmail(inputPassword.value);

    if (valid) {
    inputPassword.classList.add("valid");
    errorMessagePassword.classList.add("hidden");
    } else {
    inputPassword.classList.add("error");
    errorMessagePassword.classList.remove("hidden");
    }

});

inputPassword.addEventListener("focus", (event) => {
    event.target.classList.remove("error");
    event.target.classList.remove("valid");
    errorMessagePassword.classList.add("hidden");

});
