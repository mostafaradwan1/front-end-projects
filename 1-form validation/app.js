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

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input)
    
  } else {
  showError(input,'email not valid')
  }
}
function checkRequired(inputArr){
  inputArr.forEach(element => {
  if(element.value.trim()===''){
    showError(element,`${element.id} is required`)
  }
  else{
    showSuccess(element)
  }
  });
}
function checkLength(input,min,max){
  if (input.value.length<min) {
    showError(input,`${input.id } must be at least ${min} characters`)
  }else if (input.value.length>max) {
    showError(input,`${input.id } must be at max ${max} characters`)
  }
}

function checkPassword(input1,input2){
  if (input1.value !=input2.value) {
    showError(input2,'passwords don\'t match')
  }
}

// event listiner
form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  checkRequired([username,password,password2,email])
  checkLength(username,3,30)
  checkLength(password2,3,30)
  checkEmail(email)
  checkPassword(password,password2)

});
