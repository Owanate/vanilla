let menu = document.querySelector('#menu-bar');
let header = document.querySelector('header');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
})

window.addEventListener('scroll', () => {
    header.classList.remove('active');
});