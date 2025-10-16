const buttonExt = document.getElementById('funcion_externa');
buttonExt.addEventListener('click', functionExterna);

function functionExterna() {
    alert('¡Botón clickeado!');
}
const buttonCallback = document.getElementById('funcion_callback');
buttonCallback.addEventListener('click', () => {
    alert('¡Botón clickeado!');
});
