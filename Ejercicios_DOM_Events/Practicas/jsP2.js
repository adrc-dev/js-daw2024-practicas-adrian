let email = document.getElementById("email");
let pass = document.getElementById("pass");
let emailError = document.getElementById("emailError");
let passError = document.getElementById("passError");
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;
let btnEnviar = document.getElementById("enviar");

btnEnviar.disabled = true;

email.addEventListener("blur", validarEmail);
pass.addEventListener("blur", validarPass);

function validarEmail() {
  let valido = emailRegex.test(email.value);
  if (!valido) {
    emailError.innerHTML = "El correo debe ser en este formato: xxxx@yyyy.zzzz";
  } else {
    emailError.innerHTML = "";
  }
  actualizarBoton();
  return valido;
};

function validarPass() {
  let valid = pass.value.length >= 8 && pass.value.length <= 10;
  if (!valid) {
    passError.innerHTML = "La contraseña debe tener entre 8 y 10 caracteres.";
  } else {
    passError.innerHTML = "";
  }
  actualizarBoton();
  return valid;
};

function actualizarBoton() {
  let emailValido = emailRegex.test(email.value);
  let passValido = pass.value.length >= 8 && pass.value.length <= 10;

  if (emailValido && passValido) {
    btnEnviar.style.backgroundColor = "green";
    btnEnviar.disabled = false;
  } else {
    btnEnviar.style.backgroundColor = "antiquewhite";
    btnEnviar.disabled = true;
  }
}


