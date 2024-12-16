document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("show"); // Sembunyikan semua slide
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) { slideIndex = 1; } // Reset index jika lebih dari jumlah slide
    
    slides[slideIndex - 1].classList.add("show"); // Tampilkan slide yang aktif
    
    setTimeout(showSlides, 3000); // Ganti slide setiap 3 detik
    }

    let currentSlide = 0;

        function showSlide(index, sliderClass) {
            const slides = document.querySelector(sliderClass);
            const totalSlides = slides.children.length;
            if (index >= totalSlides) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = totalSlides - 1;
            } else {
                currentSlide = index;
            }
            slides.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        function nextSlide(sliderClass) {
            showSlide(currentSlide + 1, sliderClass);
        }

        setInterval(() => nextSlide('.slides'), 3000);
        setInterval(() => nextSlide('.testimonial-slides'), 5000);


        window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});
});


