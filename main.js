const menuEmail = document.querySelector('.flechita')
const desktopMenu = document.querySelector('.desktop-menu')

menuEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

console.log("Funcionando")