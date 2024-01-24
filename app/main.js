const barra_navegacion = document.querySelector('.barras');

barra_navegacion.onclick = function () {
    navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active')
}

const btnleft = document.querySelector('.btn-left');
const btnright = document.querySelector('.btn-right');
const slider = document.querySelector('#slider');
const sliderSection = document.querySelectorAll('.slide-section');
const ingresante=document.querySelector('#info');

btnleft.addEventListener('click', e => moveToLeft());
btnright.addEventListener('click', e => moveToRight());

setInterval(() => {
    moveToRight()
}, 2000);

let operacion = 0;
let counter = 0;
let widthImg = 100 / sliderSection.length;
let numero=69;

ingresante.innerHTML=numero;
console.log(numero);

function moveToRight() {
    if (counter >= sliderSection.length - 1) {
        operacion = 0;
        counter = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = 'none';
        return
    }
    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = 'all ease 0.6s';


}

function moveToLeft() {
    counter--;
    if (counter < 0) {
        counter = sliderSection.length - 1;
        operacion = widthImg * (sliderSection.length - 1);
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = 'none';
        return;
    }
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = 'all ease 0.6s';


}
