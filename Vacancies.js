document.getElementById('acceptButton').addEventListener('click', function() {
    document.getElementById('cookieCard').style.display = 'none';
    localStorage.setItem('cookiesAccepted', 'true');
});

window.onload = function() {
    if(localStorage.getItem('cookiesAccepted') === 'true') {
        document.getElementById('cookieCard').style.display = 'none';
    }
};

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('header .cont').classList.toggle('active');
});