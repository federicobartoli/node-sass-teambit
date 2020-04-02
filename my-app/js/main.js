window.onscroll = function() {myFunction()};

// Get the header
var header = $('#myHeader');

// Get the offset position of the navbar
var sticky = $('#myHeader').offset();

console.log(window.pageYOffset);
console.log(sticky);

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > 76 && window.pageYOffset< 350) {
   $('#myHeader').addClass('sticky');
   $('.row').removeClass('border');
   $('.fb-true-main').addClass('pt90');

    console.log('if');
} else if (window.pageYOffset > 350) {
    $('#myHeader').addClass('sticky-2');
    $('#myHeader').addClass('border');

    $('.row').removeClass('border');
     console.log('if');}
   else {
   $('#myHeader').removeClass('sticky');
    $('#myHeader').removeClass('sticky-2');
   $('#myHeader').removeClass('border');
  $('.row-header').addClass('border');
   $('.fb-true-main').removeClass('pt90');
  console.log('else');
  }
}
