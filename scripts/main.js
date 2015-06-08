$(document).ready(function(){
  "use strict";

  $('#pagepiling').pagepiling({

    loopBottom: true,
    loopTop: true,
    sectionsColor: ['#8FB7D6', '#FFFFFF', '#519E8A', '#808F85', '#0F1108']
  
    });

  $('.slide-image').click(function() {
      $(this).slideToggle(1000);
      $(this).parent().children('.slide-text').slideToggle(1000);
    })
 
   $('.slide-text').click(function() {
      $(this).slideToggle(1000);
      $(this).parent().children('.slide-image').slideToggle(1000);
    })

});

// add mailto to Get in Touch botton
function getInTouch(){
  'use strict';
  var email = "abarcan@gmail.com";
  var subject = "Hello from your site!";
  location.href = "mailto:"+email+"?"+"subject="+subject;
}
