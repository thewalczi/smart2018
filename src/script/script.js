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


    /*ADDING CLASS TO HEADER ON SCROLL*/

    $(window).on('load scroll', function() {

        var scrollPosition = 0;

        if ($(window).scrollTop() > scrollPosition) {
            $('.header-bar').addClass('header-bar--scroll');
        } else {
            $('.header-bar').removeClass('header-bar--scroll');
        }
    });

    /*CHANGED NAV TO MOBILE-NAV ON RESIZE*/


    $(window).on('load resize', function() {

        // var menuOpen = 0;
        // var navList = $('.nav.nav-mobile > ul');
        var windowW = $(window).outerWidth();

        setTimeout(function() {
            if (windowW < 768) {
                $('.nav').addClass('nav-mobile');
            } else {
                $('.nav').removeClass('nav-mobile');
            }

        }, 100)

        setTimeout(function() {
            $('.nav').css('opacity', '1');
        }, 300);




        // $('.nav-mobile--btn').click(function() {

        //     if (menuOpen == 0) {
        //         navList.animate({
        //             'marginRight': '0px'
        //         }, 100);
        //         menuOpen = 1;
        //     } else if (menuOpen == 1) {
        //         navList.animate({
        //             'marginRight': '-250px'
        //         }, 100)
        //         menuOpen = 0;
        //     }
        //     console.log(menuOpen);
        // });

    });

    /*SLIDE MENU ON SCROLL*/


});

