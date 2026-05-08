$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});

document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') {
        document.title = 'Experience | Yibeltal Simachew';
        $('#favicon').attr('href', '../assets/images/coder.png');
    } else {
        document.title = 'Come Back To Portfolio';
    }
});

// dynamic footer year
document.addEventListener('DOMContentLoaded', function () {
    var el = document.getElementById('footer-year');
    if (el) el.textContent = new Date().getFullYear();
});
