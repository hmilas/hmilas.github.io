$(function() {
    var offset = 32;
    $('#main-nav li a').click(function(e) {
        e.preventDefault();
        var href = $(this).attr('href');

        $(href)[0].scrollIntoView();
        scrollBy(0, offset);
    });

    $(window).scroll(function() {
        var $navbar = $(".navbar");
        if ($navbar.offset().top > 50) {
            $navbar.addClass("small-header");
        } else {
            $navbar.removeClass("small-header");
        }
    });

    window.sr = ScrollReveal();
    sr.reveal('#web-app-container', { delay: 300});
    sr.reveal('#consulting-container', { delay: 300 });
    sr.reveal('#company-container', { delay: 300 });
});
