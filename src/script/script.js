$(document).ready(function(){

  /*SLICK SLIDER*/

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  });


  /*PARALLAX OF THE PRODUCT FAN IMAGE*/

  var boxH = $('.be-smart').height();
  var fanH = $('.fan').height();
  // var $h1 = $(".be-smart");

  // console.log($(window).height()/boxH);
  $('.fan').css('bottom', boxH - fanH);
  $(window).on('scroll load', function() {
    var window_offset = ($(window).scrollTop()*-1 + boxH)*-1;
    if(window_offset < -5){
      $('.fan').css('bottom',window_offset);
    }
    else {
      $('.fan').css('bottom',-5);
    }


  });


  $(window).on('load scroll', function() {
    if($(window).scrollTop() > 300) {
      $('header').addClass('fixed');
    }
    else{
      $('header').removeClass('fixed');
    }
  });

})