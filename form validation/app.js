const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(username, message) {
  const formControl = username.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(username) {
    const formControl = username.parentElement;
    formControl.className = "form-control success";
  }

// event listiner
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (username.value === "") {
    showError(username, "username required");
  } else {
    showSuccess(username);
  }
});
