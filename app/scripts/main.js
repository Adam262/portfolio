$(document).ready(function(){
  $('#pagepiling').pagepiling({
      
      loopBottom: true,
      loopTop: true,
      sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
  
    });
})

// add mailto to Get in Touch botton
function getInTouch(){
  var email = "abarcan@gmail.com";
  var subject = "Hello from your site!";
  location.href = "mailto:"+email+"?"+"subject="+subject;
}