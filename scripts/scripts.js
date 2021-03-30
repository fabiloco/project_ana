function Navigation() {
    const menu = document.querySelector(".primaryNav__menu");
    const button = document.querySelector(".bar__button .button");

    // button.addEventListener('click', (e) => {
    if (menu.style.display === 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
    // });
}