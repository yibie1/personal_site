$(document).ready(function () {

    // ── navbar toggle ──
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

    // ── category tabs ──
    $('.proj-tab').on('click', function () {
        $('.proj-tab').removeClass('active');
        $(this).addClass('active');

        var cat = $(this).data('cat');

        if (cat === 'all') {
            $('.proj-section').removeAttr('hidden');
        } else {
            $('.proj-section').each(function () {
                if ($(this).data('section') === cat) {
                    $(this).removeAttr('hidden');
                } else {
                    $(this).attr('hidden', true);
                }
            });
        }
    });

    // ── expand / collapse details ──
    $(document).on('click', '.btn-expand', function () {
        var $card   = $(this).closest('.proj-card');
        var $detail = $card.find('.proj-details');
        var $icon   = $(this).find('i');
        var $btn    = $(this);

        if ($detail.attr('hidden') !== undefined) {
            $detail.removeAttr('hidden');
            $btn.addClass('open').html('<i class="fas fa-chevron-up"></i> Less');
        } else {
            $detail.attr('hidden', true);
            $btn.removeClass('open').html('<i class="fas fa-chevron-down"></i> More');
        }
    });

    // ── thumbnail gallery ──
    $(document).on('click', '.gallery-thumbs img', function () {
        var newSrc = $(this).attr('src');
        var $main  = $(this).closest('.proj-img-gallery').find('.gallery-main');
        $main.attr('src', newSrc);
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

});

// visibility change title
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') {
        document.title = 'Projects | Yibeltal Simachew';
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
