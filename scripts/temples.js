document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menuIcon');
    const menuList = document.getElementById('menuList');

    function toggleMenu() {

        menuList.classList.toggle('active');
        menuIcon.classList.toggle('active');
    }

    if (menuIcon) {
        menuIcon.addEventListener('click', toggleMenu);
    }
});
