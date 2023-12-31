let navbar = document.querySelector('.navbar');
let loginForm = document.querySelector('.login-form');
let shoppingCart = document.querySelector('.shopping-cart');
let searchForm = document.querySelector('.search-form');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
}

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('#shoppingcart').onclick = () => {
    shoppingCart.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('#loginform').onclick = () => {
    loginForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

window.onscroll = () => {
    // Check if this event is firing correctly
    console.log('Window scrolled');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}


