document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const dropdownMenu = document.querySelector('.menu');
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = menuToggle.querySelector('img');

    const openIconPath = 'Img/icons/menu.svg';         // Ícono hamburguesa
    const closeIconPath = 'Img/icons/menu-close.svg';  // Ícono cerrar

    // Cambiar ícono cuando haces clic en el toggle
    menuToggle.addEventListener('click', function() {
        dropdownMenu.classList.toggle('active');

        if (dropdownMenu.classList.contains('active')) {
            menuIcon.src = closeIconPath;
        } else {
            menuIcon.src = openIconPath;
        }
    });

    function adjustMenu() {
        if (window.innerWidth > 768) {
            dropdownMenu.classList.add('active');
            navLinks && (navLinks.style.display = 'flex');
            menuIcon.src = openIconPath;
        } else {
            dropdownMenu.classList.remove('active');
            navLinks && (navLinks.style.display = 'none');
            menuIcon.src = openIconPath;
        }
    }

    adjustMenu();
    window.addEventListener('resize', adjustMenu);

    // Cierra el menú si haces clic fuera
    document.addEventListener('click', function(event) {
        if (!menuToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('active');
            menuIcon.src = openIconPath;
        }
    });

    // Cierra el menú si haces scroll
    window.addEventListener('scroll', function() {
        if (dropdownMenu.classList.contains('active')) {
            dropdownMenu.classList.remove('active');
            menuIcon.src = openIconPath;
        }
    });
});


