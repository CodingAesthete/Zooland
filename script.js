$(window).on('load', function() {
  "use strict";

  $('.subtitle-container').click(function() {
    const homeId = $(this).find('.subtitle').attr('for');
    const homeElement = $('#' + homeId);

    if (homeElement.is(':visible')) {
      homeElement.hide();
    } else {
      homeElement.css('display', 'flex');
    }
  });

  const sliderItems = $('#slider div');
  const totalItems = sliderItems.length;
  let count = 0;
  
  function rotateSlider() {
    $(sliderItems[count]).fadeIn(2000, function() {
      setTimeout(function() {
        $(sliderItems[count]).fadeOut(2000, function() {
          count = (count + 1) % totalItems;
          rotateSlider();
        });
      }, 2000);
    });
  }
  
  rotateSlider();

});
