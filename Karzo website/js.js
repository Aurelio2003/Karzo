document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const dropdownMenu = document.querySelector('.menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        dropdownMenu.classList.toggle('active');
    });

    function adjustMenu() {
        if (window.innerWidth > 768) {
            dropdownMenu.classList.add('active'); // Asegurar que el menú siempre esté visible en desktop
            navLinks.style.display = 'flex';
        } else {
            dropdownMenu.classList.remove('active'); // Ocultar en mobile hasta que se haga clic
            navLinks.style.display = 'none';
        }
    }

    // Ejecutar la función en carga y en resize
    adjustMenu();
    window.addEventListener('resize', adjustMenu);

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener('click', function(event) {
        if (!menuToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('active');
        }
    });
});