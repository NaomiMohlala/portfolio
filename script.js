// ---- HAMBURGER MENU ----
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
    });
});

// ---- NAVBAR SCROLL EFFECT ----
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
    } else {
        navbar.style.padding = '15px 0';
        navbar.style.boxShadow = 'none';
    }
});

// ---- SMOOTH ACTIVE NAV LINKS ----
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(link => {
        link.style.color = '#ccc';
        if (link.getAttribute('href') === '#' + current) {
            link.style.color = '#4a90e2';
        }
    });
});

// ---- SCROLL REVEAL ANIMATION ----
const revealElements = document.querySelectorAll(
    '.skill-card, .project-card, .contact-card, .about-card, .stat'
);

const revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(el);
});

// ---- TYPING EFFECT ON HERO TITLE ----
const titles = [
    'Junior Software Developer',
    'Full-Stack Web Developer',
    'JavaScript Developer',
    'Node.js Developer'
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const heroTitle = document.querySelector('.hero-title');

function typeEffect() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
        heroTitle.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
    } else {
        heroTitle.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);}
    }