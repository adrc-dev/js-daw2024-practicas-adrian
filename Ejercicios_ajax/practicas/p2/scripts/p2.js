const BASE_URL = "https://reqres.in/api/users/";
const POSTMAN_URL = "https://httpbin.org/post";

//Código principal dentro del evento load
// para asegurar la carga de los componentes
window.addEventListener("load", (ev) => {
  let numsecs = document.getElementById("numsecs");
  let user = document.getElementById("user");
  let boton = document.querySelector("#execute");

  boton.addEventListener("click", (ev) => {
    ev.preventDefault();
    clearFields();
    procesarFetch(numsecs.value, user.value);
  });
});

function clearFields() {
  document.querySelectorAll("span").forEach((element) => {
    element.innerHTML = "";
  });
}

async function procesarFetch(numsecs, user) {
  let status = null; // iniciamos la variable status fuera del trycatch
  try {
    // obtener los datos del usuario y el tiempo de espera
    const response = await fetch(`${BASE_URL}${user}?delay=${numsecs}`);
    status = response.status;

    // lanzamos excepcion caso algo salga mal
    if (!response.ok) {
      throw new Error(`Error HTTP: ${status}`);
    }

    // creamos la variable user
    const userJSON = await response.json();
    const userData = userJSON.data;
    document.getElementById("id").textContent = userData.id;
    document.getElementById("email").textContent = userData.email;

    // subimos el usuario a postman
    const postResponse = await fetch(POSTMAN_URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    // actualizamos el status
    status = postResponse.status;

    // lanzamos la excepcion caso algo salga mal
    if (!postResponse.ok) {
      throw new Error(`Error al guardar el usuario: ${status}`);
    }

    // rescatamos la informacion del usuario de postman
    const postData = await postResponse.json();
    document.getElementById("name").textContent = postData.json.first_name;
    document.getElementById("status").textContent = status;
  } catch (error) {
    // mostramos el error por consola
    console.error(error);
  } finally {
    // siempre mostramos el status actualizado incluso cuando salta el catch
    document.getElementById("status").textContent = status;
  }
}
