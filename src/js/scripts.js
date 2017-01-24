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

    $(window).on("load", function() {
        $("#status").fadeOut(1200).fadeOut('slow', function() {
            $("#loader").remove();      
            $("body").delay(0).css({'overflow':'visible'});      
        });        
    });
    
    window.sr = ScrollReveal();
    sr.reveal('#web-app-container', { delay: 300});
    sr.reveal('#consulting-container', { delay: 300 });
    sr.reveal('#company-container', { delay: 300 });
});
