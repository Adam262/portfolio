function getInTouch(){"use strict";var a="abarcan@gmail.com",b="Hello from your site!";location.href="mailto:"+a+"?subject="+b}$(document).ready(function(){"use strict";$("#pagepiling").pagepiling({loopBottom:!0,loopTop:!0,sectionsColor:["#8FB7D6","#FFFFFF","#519E8A","#808F85","#0F1108"]}),$(".slide-image").click(function(){$(this).slideToggle(1e3),$(this).parent().children(".slide-text").slideToggle(1e3)}),$(".slide-text").click(function(){$(this).slideToggle(1e3),$(this).parent().children(".slide-image").slideToggle(1e3)})});