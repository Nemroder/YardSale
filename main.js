//opciones en header al hacer touch correo
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    aside.classList.add('inactive');//Este cierra
    mobileMenu.classList.add('inactive');

    desktopMenu.classList.toggle('inactive');//Este abre 
}

//mobile menu
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    desktopMenu.classList.add('inactive');
    aside.classList.add('inactive');

    mobileMenu.classList.toggle('inactive');
}


//detalles de carrito
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleCarritoAside() {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');

    aside.classList.toggle('inactive');
}