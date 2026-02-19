const burgerBtn = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector('#burgerMenu');

burgerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    burgerMenu.classList.toggle('menu-active');
})

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-header-mid') === true) {
        return;
    } else {
        if (burgerMenu.classList.contains('menu-active') === true) {
            burgerMenu.classList.remove('menu-active');
        }
        return;
    }
})