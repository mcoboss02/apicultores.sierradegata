document.addEventListener('DOMContentLoaded', () => {
    const toggleLinks = document.querySelectorAll('.toggle');
    const loginForm = document.querySelector('.login');
    const registerForm = document.querySelector('.register');

    loginForm.classList.add('active');

    toggleLinks.forEach(link => {
        link.addEventListener('click', () => {
            loginForm.classList.toggle('active');
            registerForm.classList.toggle('active');
        });
    });
});