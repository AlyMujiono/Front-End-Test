document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

// Ambil semua elemen dengan kelas 'nav-item'
const navItems = document.querySelectorAll('.nav-item');

// Tambahkan event listener untuk setiap elemen
navItems.forEach(item => {
    item.addEventListener('click', function() {
        // Hapus kelas 'active' dari semua item
        navItems.forEach(item => item.classList.remove('active'));
        // Tambahkan kelas 'active' ke item yang diklik
        this.classList.add('active');
    });
});
