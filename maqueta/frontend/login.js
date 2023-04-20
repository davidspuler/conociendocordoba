const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("formulario");
const parrafo = document.getElementById("warning");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let warning = "";
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  let entrar = false;
  parrafo.innerHTML = ""
  if (!regexEmail.test(email.value)) {
    warning += `El campo email es incorrecto <br>`;
    entrar = true;
  }
  if(password.value.length <8){
    warning += `El campo password debe tener un minimo de 8 caracteres <br>`;
    entrar = true
  }

  if(entrar){
    parrafo.innerHTML = warning
  }
});