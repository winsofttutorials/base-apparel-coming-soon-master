let emailField = document.getElementById("emailField");
let emailError = document.getElementById("emailError");

function validateEmail() {
  if (
    !emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{3,4}$/)
  ) {
    emailError.textContent = "Please provide a valid email";
    emailField.style.border = "2px solid red";
    return false;
  }
  emailError.innerHTML = "";
  emailField.style.border = "1px solid tomato";
  return true;
}
