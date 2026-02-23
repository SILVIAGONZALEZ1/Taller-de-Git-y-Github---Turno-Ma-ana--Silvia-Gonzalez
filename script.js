function scrollToContact() {
document.getElementById("contacto").scrollIntoView({
    behavior: "smooth"
});
}

function toggleMenu() {
const navLinks = document.querySelector('.nav-links');
navLinks.classList.toggle('active');
}

function scrollToTop() {
window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
}

// Mostrar/ocultar botón de scroll to top
window.addEventListener('scroll', function() {
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add('show');
} else {
    scrollToTopBtn.classList.remove('show');
}
});

const form = document.getElementById("contactForm");
const toast = document.getElementById("toast");

form.addEventListener("submit", function(e) {
e.preventDefault();

toast.classList.add("show");

setTimeout(() => {
    toast.classList.remove("show");
    form.reset();
}, 2500);
});