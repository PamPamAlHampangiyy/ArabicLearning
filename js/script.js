// Toggle class active untuk Hamburger Menu
const navbarNav = document.querySelector('.navbar-nav');
//Ketikaa hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}

// Klik di luar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');

document.addEventListener('click', function(e) {
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
})

// Modal Box
const itemDetailModal = document.querySelector('#penjelasan');
const itemDetailButtons = document.querySelectorAll('.menu-card-img');
itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) =>{
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    }    
})
// Klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) =>{
    itemDetailModal.style.display = 'none';
    e.preventDefault();
}
// Klik diluar modal
window.onclick = (e) => {
    if (e.target === itemDetailModal){
        itemDetailModal.style.display = 'none';
    }
}