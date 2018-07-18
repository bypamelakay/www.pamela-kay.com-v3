function UpdateLayout() {
  $('#nav-primary').css({
    'left' : function() { return -$(this).width() + "px"; }
  })
  $('#board > div').css({
    // grid-auto-rows: minmax(200px, auto);
    'grid-auto-rows' : function() {
      return ('minmax(' + $(window).width() * 0.1875 + 'px, auto)');
    }
  });
  $('.height-full').css({
    'min-height' : function() { return $(window).height() * 1.0; }
  });
  $('.height-3-4').css({
    'min-height' : function() { return $(window).height() * 0.75; }
  });
  $('.height-half').css({
    'min-height' : function() { return $(window).height() * 0.5; }
  });
  $('.grid-rectangle').each(function() {
    $(this).height( $(this).width() * 1.0 );
  });
  $('.container-1-4-width').each(function() {
    $(this).width( $('#page-container').width() * 0.25 );
  });
  $('.vertical-middle').css({
    'margin-top' : function() { return $(this).outerHeight() / -2; }
  });
  $('.vertical-bottom').css({
    'bottom' : function() { return -$(this).outerHeight(); }
  });
  $('#content').css({
    'border-top-width' : function() { return $('#header').outerHeight(); }
  });
}




$(document).ready(function() {
  $('.toggle-hamburger-menu').click(function() {
    $('#hamburger-menu > span').toggleClass('toggle');
    $('#nav-primary').toggleClass('toggle');
    $('#overlay').toggleClass('toggle');
    $('body').toggleClass('disable-scroll');
    // $('#nav-slider').toggleClass('nav-slider-out');
    // $('#page-container').toggleClass('blur');
    // $('#nav-menu > span').toggleClass('glyphicon-menu-hamburger');
    // $('#nav-menu > span').toggleClass('glyphicon-remove');
  });

  UpdateLayout();

  if ($(window).width() < 375) {
  // alert("Window width < 375");

  }
  if ($(window).width() >= 375) {
  // alert("Window width >= 375");

  }
  if ($(window).width() >= 375 && $(window).width() <= 413) {
  // alert("Window width >= 375 + <= 413");

  }
  if ($(window).width() <= 413) {
  // alert("Window width <= 413");

  }
  if ($(window).width() >= 414) {
  // alert("Window width >= 414");

  }
  if ($(window).width() >= 414 && $(window).width() <= 506) {
  // alert("Window width >= 414 + <= 506");

  }
  if ($(window).width() <= 506) {
  // alert("Window width <= 413");

  }
  if ($(window).width() >= 507) {
  // alert("Window width >= 507");

  }
  if ($(window).width() >= 507 && $(window).width() <= 550) {
  // alert("Window width >= 507 + <= 550");

  }
  if ($(window).width() <= 550) {
  // alert("Window width <= 550");

  }
  if ($(window).width() >= 551) {
  // alert("Window width >= 551");

  }
  if ($(window).width() >= 551 && $(window).width() <= 677) {
  // alert("Window width >= 551 + <= 677");

  }
  if ($(window).width() <= 677) {
  // alert("Window width <= 677");

  }
  if ($(window).width() >= 678) {
  // alert("Window width >= 678");

  }
  if ($(window).width() >= 678 && $(window).width() <= 767) {
  // alert("Window width >= 678 + <= 767");

  }
  if ($(window).width() <= 767) {
  // alert("Window width <= 767");

  }
  if ($(window).width() >= 768) {
  // alert("Window width >= 768");

  }
  if ($(window).width() >= 768 && $(window).width() <= 991) {
  // alert("Window width >= 768 + <= 991");

  }
  if ($(window).width() <= 991) {
  // alert("Window width <= 991");

  }
  if ($(window).width() >= 992) {
  // alert("Window width >= 992");

  }
  if ($(window).width() >= 992 && $(window).width() <= 1023) {
  // alert("Window width >= 992 + <= 1199");

  }
  if ($(window).width() <= 1023) {
  // alert("Window width <= 1023");

  }
  if ($(window).width() >= 1024) {
  // alert("Window width >= 1024");

  }
  if ($(window).width() >= 1024 && $(window).width() <= 1199) {
  // alert("Window width >= 1024 + <= 1199");

  }
  if ($(window).width() <= 1199) {
  // alert("Window width <= 1199");

  }
  if ($(window).width() >= 1200) {
  // alert("Window width >= 1200");

  }
});








$(window).resize(function() {
  UpdateLayout();


  if ($(window).width() < 375) {
  // alert("Window width < 375");

  }
  if ($(window).width() >= 375) {
  // alert("Window width >= 375");

  }
  if ($(window).width() >= 375 && $(window).width() <= 413) {
  // alert("Window width >= 375 + <= 413");

  }
  if ($(window).width() <= 413) {
  // alert("Window width <= 413");

  }
  if ($(window).width() >= 414) {
  // alert("Window width >= 414");

  }
  if ($(window).width() >= 414 && $(window).width() <= 506) {
  // alert("Window width >= 414 + <= 506");

  }
  if ($(window).width() <= 506) {
  // alert("Window width <= 413");

  }
  if ($(window).width() >= 507) {
  // alert("Window width >= 507");

  }
  if ($(window).width() >= 507 && $(window).width() <= 550) {
  // alert("Window width >= 507 + <= 550");

  }
  if ($(window).width() <= 550) {
  // alert("Window width <= 550");

  }
  if ($(window).width() >= 551) {
  // alert("Window width >= 551");

  }
  if ($(window).width() >= 551 && $(window).width() <= 677) {
  // alert("Window width >= 551 + <= 677");

  }
  if ($(window).width() <= 677) {
  // alert("Window width <= 677");

  }
  if ($(window).width() >= 678) {
  // alert("Window width >= 678");

  }
  if ($(window).width() >= 678 && $(window).width() <= 767) {
  // alert("Window width >= 678 + <= 767");

  }
  if ($(window).width() <= 767) {
  // alert("Window width <= 767");

  }
  if ($(window).width() >= 768) {
  // alert("Window width >= 768");

  }
  if ($(window).width() >= 768 && $(window).width() <= 991) {
  // alert("Window width >= 768 + <= 991");

  }
  if ($(window).width() <= 991) {
  // alert("Window width <= 991");

  }
  if ($(window).width() >= 992) {
  // alert("Window width >= 992");

  }
  if ($(window).width() >= 992 && $(window).width() <= 1023) {
  // alert("Window width >= 992 + <= 1199");

  }
  if ($(window).width() <= 1023) {
  // alert("Window width <= 1023");

  }
  if ($(window).width() >= 1024) {
  // alert("Window width >= 1024");

  }
  if ($(window).width() >= 1024 && $(window).width() <= 1199) {
  // alert("Window width >= 1024 + <= 1199");

  }
  if ($(window).width() <= 1199) {
  // alert("Window width <= 1199");

  }
  if ($(window).width() >= 1200) {
  // alert("Window width >= 1200");

  }
  if ($(window).width() >= 1200 && $(window).width() <= 1399) {
  // alert("Window width >= 1200 + <= 1399");

  }
  if ($(window).width() <= 1399) {
  // alert("Window width <= 1399");

  }
  if ($(window).width() >= 1400) {
  // alert("Window width >= 1400");

  }
}).resize();








$(window).scroll(function() {
  if( $(window).scrollTop() > 400 ) {
    $('body').css({
      'background' : '#fff'
    });
  } else {
    $('body').css({
      'background' : '#00263a'
    });
  }

  if ($(window).width() < 375) {
  // alert("Window width < 375");

  }
  if ($(window).width() >= 375) {
  // alert("Window width >= 375");

  }
  if ($(window).width() >= 375 && $(window).width() <= 413) {
  // alert("Window width >= 375 + <= 413");

  }
  if ($(window).width() <= 413) {
  // alert("Window width <= 413");

  }
  if ($(window).width() >= 414) {
  // alert("Window width >= 414");

  }
  if ($(window).width() >= 414 && $(window).width() <= 506) {
  // alert("Window width >= 414 + <= 506");

  }
  if ($(window).width() <= 506) {
  // alert("Window width <= 413");

  }
  if ($(window).width() >= 507) {
  // alert("Window width >= 507");

  }
  if ($(window).width() >= 507 && $(window).width() <= 550) {
  // alert("Window width >= 507 + <= 550");

  }
  if ($(window).width() <= 550) {
  // alert("Window width <= 550");

  }
  if ($(window).width() >= 551) {
  // alert("Window width >= 551");

  }
  if ($(window).width() >= 551 && $(window).width() <= 677) {
  // alert("Window width >= 551 + <= 677");

  }
  if ($(window).width() <= 677) {
  // alert("Window width <= 677");

  }
  if ($(window).width() >= 678) {
  // alert("Window width >= 678");

  }
  if ($(window).width() >= 678 && $(window).width() <= 767) {
  // alert("Window width >= 678 + <= 767");

  }
  if ($(window).width() <= 767) {
  // alert("Window width <= 767");

  }
  if ($(window).width() >= 768) {
  // alert("Window width >= 768");

  }
  if ($(window).width() >= 768 && $(window).width() <= 991) {
  // alert("Window width >= 768 + <= 991");

  }
  if ($(window).width() <= 991) {
  // alert("Window width <= 991");

  }
  if ($(window).width() >= 992) {
  // alert("Window width >= 992");

  }
  if ($(window).width() >= 992 && $(window).width() <= 1023) {
  // alert("Window width >= 992 + <= 1199");

  }
  if ($(window).width() <= 1023) {
  // alert("Window width <= 1023");

  }
  if ($(window).width() >= 1024) {
  // alert("Window width >= 1024");

  }
  if ($(window).width() >= 1024 && $(window).width() <= 1199) {
  // alert("Window width >= 1024 + <= 1199");

  }
  if ($(window).width() <= 1199) {
  // alert("Window width <= 1199");

  }
  if ($(window).width() >= 1200) {
  // alert("Window width >= 1200");

  }
  if ($(window).width() >= 1200 && $(window).width() <= 1399) {
  // alert("Window width >= 1200 + <= 1399");

  }
  if ($(window).width() <= 1399) {
  // alert("Window width <= 1399");

  }
  if ($(window).width() >= 1400) {
  // alert("Window width >= 1400");

  }
});
