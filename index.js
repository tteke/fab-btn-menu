const button = document.querySelector('.fab__toggle');
const menu = document.querySelector('.fab__container')
button.addEventListener('click', () => {
    menu.classList.toggle('active');
});

