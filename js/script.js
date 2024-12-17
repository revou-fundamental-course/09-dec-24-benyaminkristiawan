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

        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah pengiriman form
        
            // Mengambil nilai input
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const options = document.getElementById('options').value;
        
            // Menghapus pesan kesalahan sebelumnya
            document.getElementById('nameError').textContent = '';
            document.getElementById('emailError').textContent = '';
            document.getElementById('optionsError').textContent = '';
        
            let valid = true;
        
            // Validasi nama
            if (name == "") {
                document.getElementById('nameError').textContent = "Please enter your First and Last Name.";
                valid = false;
            }
        
            // Validasi email
            if (!email) {
                document.getElementById('emailError').textContent = "Please enter your email.";
                valid = false;
            } else if (!email.includes('@')) {
                document.getElementById('emailError').textContent = "Please enter a valid email address with '@'.";
                valid = false;
            }
        
            // Validasi opsi
            if (!options) {
                document.getElementById('optionsError').textContent = "Please select an option.";
                valid = false;
            }
        
            // Jika semua valid, tampilkan pesan sukses
            if (valid) {
                showToast("Your request is being processed.");
                // Di sini Anda bisa menambahkan logika untuk mengirim data ke server jika diperlukan.
                this.reset(); // Mengatur ulang form setelah pengiriman sukses
            }
        });
        
        // Fungsi untuk menampilkan toast message
        function showToast(message) {
            const toast = document.getElementById('toast');
            toast.textContent = message;
            toast.className = "toast show";
        
            setTimeout(() => {
                toast.className = toast.className.replace("show", "");
            }, 3000); // Toast akan hilang setelah 3 detik
        }

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




