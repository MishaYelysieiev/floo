const dropDownMenu = document.querySelector('#menu');
const burgerMenu = document.querySelector('#burger');


document.body.addEventListener('click',(event)=>{
    if(event.target.classList.contains('navbar_logo') || event.target.classList.contains('navbar_logo_item')){
        burgerMenu.classList.toggle('navbar_logo__opened');
        burgerMenu.classList.toggle('navbar_logo__closed');
        dropDownMenu.classList.toggle('nav__opened')
    }
})
