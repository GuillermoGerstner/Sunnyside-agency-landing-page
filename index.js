
const menu = document.querySelector('.header__navbar__menu');
const modal = document.querySelector('.modal');

menu.addEventListener('click', ()=>{
    modal.classList.toggle('appear-modal');
});

// functions

function buttonHover(x) {
    document.querySelector(`.${x}`).style.opacity = '1';
}

function buttonHoverOut(x) {
    document.querySelector(`.${x}`).style.opacity = '0.25';
}