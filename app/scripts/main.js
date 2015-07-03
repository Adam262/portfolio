var $pagepiling = $('#pagepiling')
    $slideImage = $('.slide-image'),
    $slideText = $('.slide-text'),
    $landingTitle = $('.landing-title');

var Config = {
  pagePiling: {
    colors: ['#8FB7D6', '#FFFFFF', '#519E8A', '#808F85', '#0F1108']
  },

  slideToggle: {
    up: 1000,
    down: 1500
  },

  landingTitle: {
    fadeInterval: 2000,
    fadeIn: 0.9,
    fadeOut: 0.1
  }
};

var Portfolio = {   
  configurePagepiling: function() {
    $pagepiling.pagepiling({
      loopBottom: true,
      loopTop: true,
      sectionsColor: Config.pagePiling.colors
    });
  },

  slideImage: function() {
    var slideToggle = Config.slideToggle;

    $slideImage.click(function() {
      $(this).slideToggle(slideToggle.up);
      $(this).parent().children('.slide-text').slideToggle(slideToggle.down);
    });
  },

  slideText: function() {
    var slideToggle = Config.slideToggle;

    $slideText.click(function() {
      $(this).slideToggle(slideToggle.up);
      $(this).parent().children('.slide-image').slideToggle(slideToggle.down);
    });
  },

  landingTitle: function() {
    var fadeInterval = Config.landingTitle.fadeInterval,
      fadeIn = Config.landingTitle.fadeIn,
      fadeOut = Config.landingTitle.fadeOut;

    setInterval(function() {
      $landingTitle.fadeTo(fadeInterval, fadeOut, function() {
        $(this).html('Automation Engineer').fadeTo(fadeInterval, fadeIn, function() {
          $(this).html('Photog').fadeTo(fadeInterval, fadeOut, function() {
            $(this).html('Fullstack Web Developer').fadeTo(fadeInterval, fadeIn)
          })
        })
      })
    }, 4000)
  },

  getInTouch: function() {
    var email   = "abarcan@gmail.com",
        subject = "Hello from your site!";

    location.href = "mailto:"+email+"?"+"subject="+subject;
  },

  init: function() {
    this.configurePagepiling();
    this.slideImage();
    this.slideText();
    this.landingTitle();
  }
};

$(document).ready(function() {
  "use strict";

  Portfolio.init();
});
