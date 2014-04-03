$(function() {

  'use strict';

  var $navBar = $('nav');

  // If touchscreen listen for touch, if not listen for click
  var hitEvent = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click';

  // Toggle the nav menu list when the user clicks the nav menu button
  $('.menu').on(hitEvent, function () {
    $navBar.toggleClass('nav-show');
  });

  $('#mixx').mixItUp({
    load: {
      sort: 'random'
    }
  }); 

  if ($('.slideshow')) {
    $('.slideshow').slick();
  }
    // place this within dom ready function
  function showpanel() {     
    
    $('.slideshow').slickNext();
 }

 // use setTimeout() to execute
 setTimeout(showpanel, 500)

  $('.modal-open').on('click', function() {
    $('.modal').show();
    $('#video').get(0).playVideo();
  });

  $('.toggle-image').on('click', function() {

    $('.modal-image').fadeIn();
    $('.modal-image').addClass('active');
    $('.toggle-image').fadeOut();
  });

  $('.close').on('click', function() {
    $('.modal').hide();
    $('.modal-image').hide();
    $('.modal-image').removeClass('active');
    $('.toggle-image').fadeIn();
    $('#video').get(0).stopVideo();
  })

  $('.content').on(hitEvent, function(event) {
    if ($navBar.hasClass('nav-show')) {
      $navBar.removeClass('nav-show');
    }
  });

  if ($('#hide-current').length) {
    var num = parseInt($('#hide-current').html());
    var prevNum = num - 1,
        nextNum = num + 1;
    if (num == 1) {
      prevNum = 91;
      nextNum = num + 1;
    } else {
      prevNum = num - 1;
      if (num == 91) {
        nextNum = 1;
      } else {
        nextNum = num + 1;
      }
    }
    $('nav li.page'+prevNum).addClass('prev');
    $('nav li.page'+prevNum+' a').text('Previous');    
    $('nav li.page'+nextNum).addClass('next');
    $('nav li.page'+nextNum+' a').text('Next');  

  }


});