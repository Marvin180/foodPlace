import "./styles.css";
import {infoMenu2} from "./js/cardsList";
import { menu } from "./data/dataLocal";


menu.forEach( food => infoMenu2(food));

const body = document.querySelector('.body');

const elementMenu = document.querySelector('#foods');
const photosPlace = document.querySelector('#photosOfThePlace');
const elementAboutUs = document.querySelector('#sobreNosotros');


body.addEventListener( 'click', (e) => {

    const idElement = e.target.id;
    if(idElement.includes('textPortadaMenu')){
        elementMenu.className='animate__animated animate__fadeIn';
        
        setTimeout(() => {
            elementMenu.className = '';
        }, 1500);


    }else if(idElement.includes('textPortadaFotos')){
        photosPlace.className='animate__animated animate__fadeIn';

        setTimeout(() => {
            photosPlace.className = '';
        }, 1500);
    }else if(idElement.includes('textPortadaAboutUs')){
        elementAboutUs.className='animate__animated animate__fadeIn';

        setTimeout(() => {
            elementAboutUs.className = '';
        }, 1500);
    }


});


ScrollReveal().reveal('.port', {delay: 400});
ScrollReveal().reveal('#banners', {delay: 400});
ScrollReveal().reveal('.photosPlace', {delay: 400});
ScrollReveal().reveal('.carTitle', {delay: 400});
ScrollReveal().reveal('.card', {delay: 400});
ScrollReveal().reveal('.imgs', {delay: 400});





