function changeLanguage(language) {
    const texts = {
        id: {
            carouselTitle: "Pantai Srakung Gunungkidul",
            sectionTitle: "Tentang Pantai Srakung",
            sectionContent: "Pantai Srakung, sebuah surga tersembunyi di Gunungkidul, menawarkan keindahan alam yang memukau dan suasana yang damai. Terletak di Desa Pucung, Girisubo, Yogyakarta, pantai ini adalah tempat ideal untuk melarikan diri dari keramaian kota dan merasakan keaslian alam yang masih alami.",
        },
        en: {
            carouselTitle: "Pantai Srakung Gunungkidul",
            sectionTitle: "About Pantai Srakung",
            sectionContent: "Srakung Beach, a hidden paradise in Gunungkidul, offers stunning natural beauty and a peaceful atmosphere. Located in Pucung Village, Girisubo, Yogyakarta, this beach is the ideal place to escape from the hustle and bustle of the city and experience the authenticity of unspoiled nature.",
        }
    };

    const text = texts[language];
    document.getElementById('carousel-title').textContent = text.carouselTitle;
    document.getElementById('section-title').textContent = text.sectionTitle;
    document.getElementById('section-content').textContent = text.sectionContent;
}

// Typing Effect
document.addEventListener("DOMContentLoaded", function() {
    let title = document.getElementById('section-title');
    let text = title.innerHTML;
    title.innerHTML = "";
    let i = 0;
    function type() {
        if (i < text.length) {
            title.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    type();
});

// Fade-in Effect
window.addEventListener('scroll', function() {
    document.querySelectorAll('.fade-in').forEach(function(element) {
        let position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.style.opacity = 1;
        }
    });
    window.addEventListener('scroll', function() {
        let fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(function(element) {
            let position = element.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
            if (position < windowHeight - 100) {
                element.classList.add('appear');
            } else {
                element.classList.remove('appear');
            }
        });
    });
    
    // Typing effect (bekerja saat klik atau scroll ke bawah)
    document.querySelector('.button a').addEventListener('click', function() {
        let typingText = document.getElementById('section-title');
        let text = typingText.innerHTML;
        typingText.innerHTML = "";
        let i = 0;
        let typingEffect = setInterval(function() {
            if (i < text.length) {
                typingText.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 100);
    });
    
});
// Script untuk memunculkan card saat halaman di-scroll
window.addEventListener('scroll', function() {
    var cards = document.querySelectorAll('.slide-in-right');
    var documentationSection = document.getElementById('map-title').getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    // Cek apakah pengguna sedang berada di dekat bagian Dokumentasi Pantai
    if (documentationSection < screenPosition && documentationSection > 0) {
        cards.forEach(function(card) {
            var cardPosition = card.getBoundingClientRect().top;
            
            // Menampilkan efek hanya jika pengguna menggulir di area "Dokumentasi Pantai"
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateX(0)'; // Pastikan kartu meluncur dari kanan
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateX(100%)'; // Mengembalikan posisi kartu jika di luar layar
            }
        });
    }
});
window.addEventListener('resize', function() {
    var carousel = document.querySelector('#beritaCarousel');
    var carouselInstance = new bootstrap.Carousel(carousel);

    // Cek lebar layar
    if (window.innerWidth <= 768) {
        carouselInstance.cycle(); // Mengaktifkan auto-cycle carousel
    } else {
        carouselInstance.pause(); // Menghentikan auto-cycle jika layar besar
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".slider-img");
    let currentIndex = 0;

    function showNextImage() {
        // Sembunyikan gambar saat ini
        images[currentIndex].style.opacity = 0;

        // Pindah ke gambar berikutnya
        currentIndex = (currentIndex + 1) % images.length;

        // Tampilkan gambar berikutnya
        images[currentIndex].style.opacity = 1;
    }

    // Tampilkan gambar pertama
    images[currentIndex].style.opacity = 1;

    // Panggil fungsi secara berkala
    setInterval(showNextImage, 2200); // Ganti gambar setiap 3 detik
});
document.addEventListener('scroll', function() {
    const imageCard = document.querySelector('.animated-card');
    const mapCard = document.querySelector('.animated-map');

    const imageCardRect = imageCard.getBoundingClientRect();
    const mapCardRect = mapCard.getBoundingClientRect();

    // Cek apakah card gambar sudah terlihat
    if (imageCardRect.top < window.innerHeight && imageCardRect.bottom > 0) {
        imageCard.classList.add('visible');
    } else {
        imageCard.classList.remove('visible');
    }

    // Cek apakah peta sudah terlihat
    if (mapCardRect.top < window.innerHeight && mapCardRect.bottom > 0) {
        mapCard.classList.add('visible');
    } else {
        mapCard.classList.remove('visible');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.fade-in.scroll-effect');

    function handleScroll() {
        const scrollY = window.scrollY;

        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const elementTop = rect.top + scrollY;

            if (scrollY + window.innerHeight > elementTop + 50) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
});

document.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.card-left, .card-center, .card-right');

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            card.classList.add('visible'); // Tambahkan kelas visible saat card terlihat
        } else {
            card.classList.remove('visible'); // Hapus kelas visible saat card tidak terlihat
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card-effect');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('show');
        }, index * 300);
    });
});
function changeLanguage(lang) {
    if (lang === 'id') {
        document.getElementById('section-content-id').style.display = 'block';
        document.getElementById('section-content-en').style.display = 'none';
        // Tambahkan logika untuk menampilkan teks bahasa Indonesia dan menyembunyikan bahasa Inggris
    } else if (lang === 'en') {
        document.getElementById('section-content-id').style.display = 'none';
        document.getElementById('section-content-en').style.display = 'block';
        // Tambahkan logika untuk menampilkan teks bahasa Inggris dan menyembunyikan bahasa Indonesia
    }
}

// Pastikan bahasa default ditampilkan saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    changeLanguage('id'); // Atau 'en' jika ingin default bahasa Inggris
});
