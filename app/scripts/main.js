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

var Portfolio = (
  function() { 
    var slideToggle = Config.slideToggle;

    function configurePagepiling() {  
      $pagepiling.pagepiling({
        loopBottom: true,
        loopTop: true,
        sectionsColor: Config.pagePiling.colors
      });
    }

    function slideImage() {
      $slideImage.click(function() {
        console.log($(this))
        $(this).slideToggle(slideToggle.up);
        $(this).parent().children('.slide-text').slideToggle(slideToggle.down);
      });
    }

    function slideText() {
      $slideText.click(function() {
        $(this).slideToggle(slideToggle.up);
        $(this).parent().children('.slide-image').slideToggle(slideToggle.down);
      });
    }

    function landingTitle() {
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
    }

    function getInTouch() {
      var email   = "abarcan@gmail.com",
          subject = "Hello from your site!";

      location.href = "mailto:"+email+"?"+"subject="+subject;
    }

    function registerEvents() {
      $('#btn-contact').on('click', getInTouch)
    }

    function init() {
      registerEvents();
      configurePagepiling();
      slideImage();
      slideText();
      landingTitle();
    }

    return { init: init };

  }()
);

$(document).ready(Portfolio.init);
