let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');
let body = document.querySelector("body");
let logo = document.querySelector('.logo');
let select = document.querySelector('.select');
let radioGroup = document.querySelector('.radio_group');

function toggleBurger(){
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock'); //запрет скрола при открытом бургере
    logo.style.zIndex = '100';
}

/**
 * Скрыть показать меню выбора ингредиентов
 */
function toggleSelect(){
    radioGroup.classList.toggle('active');
    radioGroup.classList.toggle('hidden');
}

burger.addEventListener('click',function (){
    toggleBurger();
});

// select.addEventListener('click',function (){
//     toggleSelect();
// });