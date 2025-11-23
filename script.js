const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    document.querySelector('.ham-icon').classList.toggle('active');
    document.querySelector('.nav-container').classList.toggle('active');
})