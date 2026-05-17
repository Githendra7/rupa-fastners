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

/* PRODUCT CAROUSEL LOGIC */
const track = document.querySelector('.carousel-track');
const cNextBtn = document.querySelector('.c-arrow.c-right');
const cPrevBtn = document.querySelector('.c-arrow.c-left');

// Clone items for seamless loop
const originalCards = Array.from(track.children);
originalCards.forEach(card => {
    const clone = card.cloneNode(true);
    track.appendChild(clone);
});

let carouselIndex = 0;
let carouselAutoInterval;
let isCarouselAnimating = false;

function getCardWidth() {
    const firstCard = track.querySelector('.product-card');
    if (!firstCard) return 0;
    const style = window.getComputedStyle(firstCard);
    const marginRight = parseFloat(style.marginRight);
    return firstCard.offsetWidth + marginRight;
}

function updateCarousel(animate = true) {
    if (animate) {
        track.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    } else {
        track.style.transition = 'none';
    }
    
    const cardWidth = getCardWidth();
    track.style.transform = `translateX(-${carouselIndex * cardWidth}px)`;
}

// Handle seamless jump after transition
track.addEventListener('transitionend', () => {
    isCarouselAnimating = false;
    const totalOriginal = originalCards.length;
    
    if (carouselIndex >= totalOriginal) {
        // Jump back to original start
        carouselIndex = 0;
        updateCarousel(false);
    } else if (carouselIndex < 0) {
        // Jump to cloned end
        carouselIndex = totalOriginal - 1;
        updateCarousel(false);
    }
});

cNextBtn.onclick = () => {
    if (isCarouselAnimating) return;
    isCarouselAnimating = true;
    carouselIndex++;
    updateCarousel();
    resetCarouselAuto();
};

cPrevBtn.onclick = () => {
    if (isCarouselAnimating) return;
    isCarouselAnimating = true;
    carouselIndex--;
    updateCarousel();
    resetCarouselAuto();
};

function startCarouselAuto() {
    carouselAutoInterval = setInterval(() => {
        if (!isCarouselAnimating) {
            isCarouselAnimating = true;
            carouselIndex++;
            updateCarousel();
        }
    }, 3000);
}

function resetCarouselAuto() {
    clearInterval(carouselAutoInterval);
    startCarouselAuto();
}

startCarouselAuto();
window.addEventListener('resize', () => updateCarousel(false));

