// Get the navigation elements
const navbar = document.querySelector('.header .navbar');
const loginForm = document.querySelector('.header .login-form');
const shoppingCart = document.querySelector('.header .shopping-cart');
const searchForm = document.querySelector('.header .search-form');
const menuBtn = document.querySelector('#menu-btn');
const searchBtn = document.querySelector('#search-btn');
const shoppingCartBtn = document.querySelector('#shoppingcart');
const loginFormBtn = document.querySelector('#loginform');

// Function to toggle the active class and close other elements
function toggleElement(element) {
    element.classList.toggle('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
}

// Toggle the navigation menu on menu button click
menuBtn.addEventListener('click', function () {
    toggleElement(navbar);
});

// Toggle the search form on search button click
searchBtn.addEventListener('click', function () {
    toggleElement(searchForm);
});

// Toggle the shopping cart on shopping cart button click
shoppingCartBtn.addEventListener('click', function () {
    toggleElement(shoppingCart);
});

// Toggle the login form on login form button click
loginFormBtn.addEventListener('click', function () {
    toggleElement(loginForm);
});

// Close all elements when scrolling
window.addEventListener('scroll', function () {
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
});

// Initialize Swiper slider
var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
