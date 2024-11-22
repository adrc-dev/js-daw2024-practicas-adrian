document.getElementById('newNumber').addEventListener('click', generarNumero);

function generarNumero() {
  let random = Math.floor(Math.random() * 100000);
  let ul = document.getElementById('insertNumber');
  let li = document.createElement('li');
  li.textContent = random;
  ul.appendChild(li);
}