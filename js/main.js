$(function() {
  $('#page-top a').click(function() {
    let position = $('html').offset().top;
    $('body,html').animate({
      scrollTop: position
    }, 500, 'swing');
  });
})