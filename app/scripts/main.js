$(document).ready(function(){
  $('#pagepiling').pagepiling({
      
      loopBottom: true,
      loopTop: true,
      sectionsColor: ['#8FB7D6', '#FFFFFF', '#519E8A', '#808F85', '#0F1108'],
  
    });
})

// add mailto to Get in Touch botton
function getInTouch(){
  var email = "abarcan@gmail.com";
  var subject = "Hello from your site!";
  location.href = "mailto:"+email+"?"+"subject="+subject;
}