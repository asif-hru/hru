let menuItem = document.getElementById("menu-sidebar");
let headerHamburger = document.getElementById("header-hamburger");
console.log("menuItem",menuItem);
headerHamburger.addEventListener('click', () => {
    menuItem.classList.toggle('toggle-sidebar');
})