$(document).ready(function() {

  var $header = $("header");
  var $sticky = $header.before($header.clone().addClass("sticky"));

  $(window).on("scroll", function() {
    var scrollFromTop = $(window).scrollTop();
    $("body").toggleClass("scroll", (scrollFromTop > 350));
  });

  // SMOOTH SCROLL
  $('.menu li a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    var target = $(this.hash);

    if (target.length) {
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 55
      }, 1000);
    }
  });

  // MASONRY
  $('.grid').masonry({
    // Options
    itemSelector: '.grid-item',
    columnWidth: 60,
    fitWidth: true,
    gutter: 0
  });

  // SLICK SLIDER
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    dots: false,
    centerMode: true,
    slidesToShow: 3,
    fade: false,
    prevArrow: '<button type="button" class="slick-prev">Prev</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>'
  });

});
