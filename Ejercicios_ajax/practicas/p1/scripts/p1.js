async function obtenerUsuarios() {
  try {
    // cazamos un usuario de la api con la peticion GET
    const response = await fetch("https://randomuser.me/api/?result=1");
    // si hay algun error con la peticion lanzamos el error
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    const userData = await response.json();
    const user = userData.results[0];
    const userInput = document.getElementById("user");

    // limpiar el contenedor antes de poner nuevos datos
    userInput.innerHTML = "";

    // imagen
    const imagen = document.createElement("img");
    imagen.src = user.picture.large;
    userInput.appendChild(imagen);

    // nombre
    const name = document.createElement("p");
    name.textContent = `${user.name.first} ${user.name.last}`;
    userInput.appendChild(name);

    // email
    const email = document.createElement("p");
    email.textContent = `Email: ${user.email}`;
    userInput.appendChild(email);

    // direccion
    const direccion = document.createElement("p");
    direccion.textContent =
      user.location.street.number + " " + user.location.street.name;
    userInput.appendChild(direccion);

    // estado
    const estado = document.createElement("p");
    estado.textContent =
      user.location.city + " (" + user.location.state.toUpperCase() + ")";
    userInput.appendChild(estado);
  } catch (error) {
    console.log("Error: ", error);
  }
}

obtenerUsuarios();
