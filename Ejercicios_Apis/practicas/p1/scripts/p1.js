const main = document.querySelector("#main");

// pedimos permiso y notificamos caso se acepte
const permiso = Notification.permission;
if (permiso == "default") {
  Notification.requestPermission().then((resp) => {
    if (resp == "granted")
      new Notification("Aceptado", {
        body: "Gracias por aceptar las notificaciónes 😊",
      });
  });
}

function timeout(ms) {
  let segundos = Math.floor(ms / 1000);
  return new Promise((resolve) => {
    let intervalo = setInterval(() => {
      main.textContent = `${segundos} segundos.`;
      if (segundos == 0) {
        clearInterval(intervalo);
        resolve();
      }
      segundos--;
    }, 1000);
  });
}

// llamamos a la funcion timeout para iniciar el contador
timeout(5000).then(() => {
  // creamos la notificacion 
  let noti = new Notification("🔥 ¡Hay un nuevo video! 🔥", {
    body: "Haz click en esta notificación para verlo.",
    icon: "icon_atention.png"
  });

  // eventlistener que nos lleva al video
  noti.addEventListener('click', () => {
    noti.close(); // hacer desaparecer la notificacion al clicar
    window.location.href = "p1video.html";
  });
});