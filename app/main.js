const barra_navegacion = document.querySelector('.barras');

barra_navegacion.onclick = function () {
    navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active')
}