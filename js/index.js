const showMenu = document.querySelector('.menu-bars');
const menu = document.querySelector('.hide-menu');
const closeMenu = document.querySelector('.close-menu');

showMenu.addEventListener('click', () => {
    if (menu.classList.contains('show')){
        menu.classList.remove('show');
    }else{
        menu.classList.add('show')
    }
})

closeMenu.addEventListener('click', () => {
    if (menu.classList.contains('show')){
        menu.classList.remove('show');
    }else{
        menu.classList.add('show')
    }
})