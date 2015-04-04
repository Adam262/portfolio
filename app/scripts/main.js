$(document).ready(function(){
  "use strict";

  $('#pagepiling').pagepiling({

    loopBottom: true,
    loopTop: true,
    sectionsColor: ['#8FB7D6', '#FFFFFF', '#519E8A', '#808F85', '#0F1108']
  
    });

  $('.slider').bxSlider({

    ticker: true,
    tickerHover: true,
    adaptiveHeight: true,
    minSlides: 2,
    maxSlides: 2,
    speed: 25000

  });
});

// add mailto to Get in Touch botton
function getInTouch(){
  var email = "abarcan@gmail.com";
  var subject = "Hello from your site!";
  location.href = "mailto:"+email+"?"+"subject="+subject;
}
