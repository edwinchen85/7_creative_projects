$(document).ready(function() {

  var $header = $("header");
  var $sticky = $header.before($header.clone().addClass("sticky"));

  $(window).on("scroll", function() {
    var scrollFromTop = $(window).scrollTop();
    $("body").toggleClass("scroll", (scrollFromTop > 350));
  });

  // MASONRY
  $('.grid').masonry({
    // Options
    itemSelector: '.grid-item',
    columnWidth: 60,
    fitWidth: true,
    gutter: 0
  });

});
