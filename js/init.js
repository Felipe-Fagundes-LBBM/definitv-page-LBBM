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

const slider = document.querySelectorAll('.slider')
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider () {
  slider.forEach(item => item.classList.remove('on'));
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function prevNextSlider(direction) {
  hideSlider();
  if (direction === 'next') {
    if (currentSlide === slider.length - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
  } else if (direction === 'prev') {
    if (currentSlide === 0) {
      currentSlide = slider.length - 1;
    } else {
      currentSlide--;
    }
  }
  showSlider();
}

btnNext.addEventListener('click', () => prevNextSlider('next'));
btnPrev.addEventListener('click', () => prevNextSlider('prev'));
