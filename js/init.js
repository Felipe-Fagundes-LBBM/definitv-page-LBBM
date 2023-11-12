(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


//carroseeeeel

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {
    fullWidth: true,
    indicators: true,
    
  });
});

// Funções de navegação
function nextSlide() {
  var instance = M.Carousel.getInstance(document.querySelector('.carousel'));
  instance.next();
}

function prevSlide() {
  var instance = M.Carousel.getInstance(document.querySelector('.carousel'));
  instance.prev();
}

// fim do carroseeeeel