const nombre = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("formulario");
const parrafo = document.getElementById("warning");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let warning = "";
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  let entrar = false;
  parrafo.innerHTML = ""
  if (nombre.value.length == 0) {
    warning += `El campo nombre debe tener un minimo de 10 caracteres <br>`;
    entrar = true;
  }
  if (!regexEmail.test(email.value)) {
    warning += `El campo email es incorrecto <br>`;
    entrar = true;
  }
  if(pass.value.length <8){
    warning += `El campo password debe tener un minimo de 8 caracteres <br>`;
    entrar = true
  }

  if(entrar){
    parrafo.innerHTML = warning
  }
});