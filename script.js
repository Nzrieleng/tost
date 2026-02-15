const pages = document.querySelectorAll('.page');
const book = document.getElementById('book');
const music = document.getElementById('bgMusic');
let openPages = 0;
let isMusicPlaying = false;

pages.forEach((page, index) => {
    page.addEventListener('click', () => {
        // Putar musik saat sampul pertama kali dibuka
        if (!isMusicPlaying) {
            music.play();
            isMusicPlaying = true;
        }

        if (!page.classList.contains('flipped')) {
            page.classList.add('flipped');
            openPages++;
            setTimeout(() => { page.style.zIndex = 20 + index; }, 500);
        } else {
            page.classList.remove('flipped');
            openPages--;
            setTimeout(() => { page.style.zIndex = 10 - index; }, 500);
        }
    });
});

// Efek Tilt (Hanya jika buku tertutup)
document.addEventListener('mousemove', (e) => {
    if (openPages === 0) {
        let x = (window.innerWidth / 2 - e.pageX) / 45;
        let y = (window.innerHeight / 2 - e.pageY) / 45;
        book.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    } else {
        // Sedikit miring saat terbuka agar tetap terlihat 3D
        book.style.transform = `rotateX(5deg) rotateY(-15deg)`;
    }
});