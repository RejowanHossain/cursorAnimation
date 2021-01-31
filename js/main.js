let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.main-menu ul li ');

window.addEventListener('mousemove', function(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
});


navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('grow');
    });
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('grow');
    })
});