$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

document.getElementById('acceptButton').addEventListener('click', function() {
    document.getElementById('cookieCard').style.display = 'none';
    localStorage.setItem('cookiesAccepted', 'true');
});

window.onload = function() {
    if(localStorage.getItem('cookiesAccepted') === 'true') {
        document.getElementById('cookieCard').style.display = 'none';
    }
};

$('.owl-carousel').owlCarousel({
    nav: false,
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('header .cont').classList.toggle('active');
});