(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


    // card function
$(document).ready(function(){
  $('.collapsible').collapsible();
});

// forms

$(document).ready(function() {
  M.updateTextFields();
})


// //carroseeeeel

// document.addEventListener('DOMContentLoaded', function () {
//   var elems = document.querySelectorAll('.carousel');
//   var instances = M.Carousel.init(elems, {
//     fullWidth: true,
//     indicators: true,

//   });
// });

// // Funções de navegação
// function nextSlide() {
//   var instance = M.Carousel.getInstance(document.querySelector('.carousel'));
//   instance.next();
// }

// function prevSlide() {
//   var instance = M.Carousel.getInstance(document.querySelector('.carousel'));
//   instance.prev();
// }

// // fim do carroseeeeel

// const slider = document.querySelectorAll('.slider')
// const btnPrev = document.getElementById('prev-button');
// const btnNext = document.getElementById('next-button');

// let currentSlide = 0;

// function hideSlider() {
//   slider.forEach(item => item.classList.remove('on'));
// }

// function showSlider() {
//   slider[currentSlide].classList.add('on')
// }

// function prevNextSlider(direction) {
//   hideSlider();
//   if (direction === 'next') {
//     if (currentSlide === slider.length - 1) {
//       currentSlide = 0;
//     } else {
//       currentSlide++;
//     }
//   } else if (direction === 'prev') {
//     if (currentSlide === 0) {
//       currentSlide = slider.length - 1;
//     } else {
//       currentSlide--;
//     }
//   }
//   showSlider();
// }

// btnNext.addEventListener('click', () => prevNextSlider('next'));
// btnPrev.addEventListener('click', () => prevNextSlider('prev'));


// let list = document.querySelector('.slider .list');
// let items = document.querySelectorAll('.slider .list .item');
// let dots = document.querySelectorAll('.selector .dots li');
// let prev = document.getElementById('.prev');
// let next = document.getElementById('.next');

// let active = 0;
// let lengthItems = items.length - 1;

// next.onclick = function(){
//   if(active + 1 > lengthItems){
//    active = 0; 
//   } else{
//     active = active + 1;
//   } 
//   reloadSlider();
// }

// prev.onclick = function () {
//   if(active -1 < 0){
//     active = lengthItems;
//     } else{
//       active = active - 1;
//     }
//     reloadSlider();
// }

// let refreshSlider = setInterval (() => {next.click()}, 3000);
// function reloadSlider (){
//   let checkLeft = items [active].offsetLeft;
//   list.style.left = -checkLeft+'px';

//   let lastActiveDot = document.querySelector('.slider .dots li.active');
//   lastActiveDot.classList.remove('active');
//   dots[active].classList.add('active');
//   clearInterval(refreshSlider);
//   refreshSlider = setInterval(()=> {next.click()}, 5000 )

// }

// dots.forEach((Li, key) => {
//   Li.addEventListener('click', function(){
//     active = key;
//     reloadSlider();
//   })
// })