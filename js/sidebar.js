let menuItem = document.getElementsByClassName("menu-item");
console.log(menuItem);
Array.from(menuItem).forEach(element => {
    console.log(element);
    element.addEventListener('click', () => {
        Array.from(menuItem).forEach(ele => {
            ele.classList.remove('active');
        });

        element.classList.add('active');
    })
});