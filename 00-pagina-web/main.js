window.addEventListener('scroll', function() {
    const welcomeSection = document.querySelector('.welcome-section');
    const scrollPosition = window.scrollY;
    const scaleValue = Math.max(1 - scrollPosition / 600, 0.5); // Ajusta el valor 600 según sea necesario
    welcomeSection.style.transform = `scale(${scaleValue})`;
});
