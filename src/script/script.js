$(document).ready(function() {

    /*SLICK SLIDER*/

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 6000,
    });


    /*PARALLAX OF THE PRODUCT FAN IMAGE*/

    var boxH = $('.be-smart').height();
    var fanH = $('.fan').height();

    $('.fan').css('bottom', boxH - fanH);
    $(window).on('scroll load', function() {
        var window_offset = ($(window).scrollTop() * -1 + boxH) * -1;
        if (window_offset < -5) {
            $('.fan').css('bottom', window_offset);
        } else {
            $('.fan').css('bottom', -5);
        }
    });


    /*SCROLL TO ELEMENT*/

    $(".nav--item > a, .intro--btn").click(function() {

        var scrollTarget = $(this).attr('data-target');
        var headerH = $("header").height();

        $('html, body').animate({
            scrollTop: $("#" + scrollTarget).offset().top - headerH + 2
        }, 1200);
    });


});


/*ADDING CLASS TO HEADER ON SCROLL*/

$(window).on('load scroll', function() {

    var scrollPosition = 5;

    if ($(window).scrollTop() > scrollPosition) {
        $('.header-bar').addClass('header-bar--scroll');
    } else {
        $('.header-bar').removeClass('header-bar--scroll');
    }
});



/*CHANGED NAV TO MOBILE-NAV ON RESIZE*/


$(window).on('load resize', function() {


    var windowW = $(window).outerWidth();

    $('.nav').css('opacity', '0');

    setTimeout(function() {
        if (windowW < 768) {
            $('.nav').addClass('nav-mobile');
        } else {
            $('.nav').removeClass('nav-mobile');
        }

        setTimeout(function() {
            $('.nav').animate({
                'opacity': 1
            }, 200);
        }, 100);
    }, 100)

});


/*LAZY LOAD INTRO*/

$(window).on('load', function() {

    setTimeout(function() {

        $('.intro--text').css({
            top: '50%',
            opacity: 1
        });
    }, 1000);
});


$(window).on('load', function() {
    $('.preloader').fadeOut(1000);
})