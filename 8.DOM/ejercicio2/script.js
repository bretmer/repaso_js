let titulo = document.querySelector('h1');
titulo.textContent = "Otro titulo";
let primerTitulo = titulo.textContent;
titulo.textContent = "Mi primer titulo";
let contenido = document.querySelector('#contenido');
contenido.innerHTML = `<p>${titulo.textContent}</p>`;