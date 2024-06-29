function BlurTextAnimeControl() {
    $('.smoothTextTrigger').each(function() {
      var elemPos = $(this).offset().top - 50; // Element's position, 50px above
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass('combinedEffect'); // Add class when element is in view
      } else {
        $(this).removeClass('combinedEffect'); // Remove class when element is out of view
      }
    });
  }

  // Trigger animation on scroll
  $(window).scroll(function() {
    BlurTextAnimeControl();
  });

  // Trigger animation on page load
  $(window).on('load', function() {
    BlurTextAnimeControl();
  });