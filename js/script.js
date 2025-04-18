document.addEventListener('DOMContentLoaded', function () {
    // Select elements
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCloseIcon = document.querySelector('.navbar-close-icon');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Show navbar when toggler is clicked
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function () {
            navbarCollapse.classList.add('show');
            navbarToggler.style.display = 'none';
        });
    }

    // Hide navbar when close icon is clicked
    if (navbarCloseIcon) {
        navbarCloseIcon.addEventListener('click', function () {
            navbarCollapse.classList.remove('show');
            navbarToggler.style.display = 'block';
        });
    }
});
