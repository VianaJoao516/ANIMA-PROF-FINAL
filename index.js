// =================================================================
// 1. Lógica do Menu Mobile (Hamburger)
// =================================================================

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinksMobile = document.querySelector('.nav-links-mobile');

    const closeMenu = () => {
        menuToggle.checked = false;
        navLinks.classList.remove('active');
        navLinksMobile.classList.remove('active');
    };

    menuToggle.addEventListener('change', function() {
        if (this.checked) {u
            navLinks.classList.add('active');
            navLinksMobile.classList.add('active');
        } else {
            navLinks.classList.remove('active');
            navLinksMobile.classList.remove('active');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (event) => {
        if (window.innerWidth > 768) return;

        const isClickInsideNavbar = document.querySelector('.navbar').contains(event.target);
        const isMenuOpen = menuToggle.checked;

        if (isMenuOpen && !isClickInsideNavbar) {
            closeMenu();
        }
    });
});


// =================================================================
// 2. Lógica do Carrossel (Slideshow)
// =================================================================

let slideIndex = 1;

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("banner");
    const dots = document.getElementsByClassName("dot");

    if (slides.length === 0) return;

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }

    slides[slideIndex - 1].classList.add('active');
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add('active');
    }
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);

    document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
    document.querySelector('.next').addEventListener('click', () => plusSlides(1));

    document.querySelectorAll('.dots-container .dot').forEach((dot, index) => {
        dot.addEventListener('click', () => currentSlide(index + 1));
    });

    setInterval(() => {
        plusSlides(1);
    }, 5000);
});


// =================================================================
// 3. Animações de Scroll (Intersection Observer)
// =================================================================

document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.anima-container, .cta-unifagoc, .cursos-section, .card');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});