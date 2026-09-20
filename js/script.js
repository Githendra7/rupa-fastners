const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const nextBtn = document.querySelector('.arrow.right');
const prevBtn = document.querySelector('.arrow.left');

let current = 0;
let isAnimating = false;
let autoSlideInterval;

function showSlide(index) {
    if (isAnimating || index === current) return;
    isAnimating = true;

    slides[current].classList.remove('active');
    slides[index].classList.add('active');

    dots[current].classList.remove('active');
    dots[index].classList.add('active');

    current = index;

    setTimeout(() => {
        isAnimating = false;
    }, 1000);
}

nextBtn.onclick = () => {
    showSlide((current + 1) % slides.length);
    resetAuto();
};

prevBtn.onclick = () => {
    showSlide((current - 1 + slides.length) % slides.length);
    resetAuto();
};

dots.forEach((dot, index) => {
    dot.onclick = () => {
        showSlide(index);
        resetAuto();
    };
});

function startAuto() {
    autoSlideInterval = setInterval(() => {
        showSlide((current + 1) % slides.length);
    }, 5000);
}

function resetAuto() {
    clearInterval(autoSlideInterval);
    startAuto();
}

startAuto();

// Optional: Add scroll spy to highlight active nav links
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

