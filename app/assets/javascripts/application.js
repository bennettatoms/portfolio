// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function() {
  var menuToggle = $('#js-centered-navigation-mobile-menu').unbind();
  $('#js-centered-navigation-menu').removeClass("show");
  
  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-centered-navigation-menu').slideToggle(function(){
      if($('#js-centered-navigation-menu').is(':hidden')) {
        $('#js-centered-navigation-menu').removeAttr('style');
      }
    });
  });
});

$(document).ready(function() {
  if ($("#js-parallax-window-one").length) {
    parallax();
  }
});

$(window).scroll(function(e) {
  if ($("#js-parallax-window-one").length) {
    parallax();
  }
});

function parallax(){
  if( $("#js-parallax-window-one").length > 0 ) {
    var plxBackground = $("#js-parallax-background-one");
    var plxWindow = $("#js-parallax-window-one");

    var plxWindowTopToPageTop = $(plxWindow).offset().top;
    var windowTopToPageTop = $(window).scrollTop();
    var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

    var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
    var windowInnerHeight = window.innerHeight;
    var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
    var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
    var plxSpeed = 0.35;

    plxBackground.css('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
  }
  if ( $("#js-parallax-window-two").length > 0 ) {
    var plxBackgroundTwo = $("#js-parallax-background-two");
    var plxWindowTwo = $("#js-parallax-window-two");

    var plxWindowTopToPageTopTwo = $(plxWindowTwo).offset().top;
    var windowTopToPageTopTwo = $(window).scrollTop();
    var plxWindowTopToWindowTopTwo = plxWindowTopToPageTopTwo - windowTopToPageTopTwo;

    var plxBackgroundTopToPageTopTwo = $(plxBackgroundTwo).offset().top;
    var windowInnerHeightTwo = window.innerHeight;
    var plxBackgroundTopToWindowTopTwo = plxBackgroundTopToPageTopTwo - windowTopToPageTopTwo;
    var plxBackgroundTopToWindowBottomTwo = windowInnerHeightTwo - plxBackgroundTopToWindowTopTwo;
    var plxSpeedTwo = 0.35;

    plxBackgroundTwo.css('top', - (plxWindowTopToWindowTopTwo * plxSpeedTwo) + 'px');
  }
  if( $("#js-parallax-window-three").length > 0 ) {
    var plxBackgroundThree = $("#js-parallax-background-three");
    var plxWindowThree = $("#js-parallax-window-three");

    var plxWindowTopToPageTopThree = $(plxWindowThree).offset().top;
    var windowTopToPageTopThree = $(window).scrollTop();
    var plxWindowTopToWindowTopThree = plxWindowTopToPageTopThree - windowTopToPageTopThree;

    var plxBackgroundTopToPageTopThree = $(plxBackgroundThree).offset().top;
    var windowInnerHeightThree = window.innerHeight;
    var plxBackgroundTopToWindowTopThree = plxBackgroundTopToPageTopThree - windowTopToPageTopThree;
    var plxBackgroundTopToWindowBottomThree = windowInnerHeightThree - plxBackgroundTopToWindowTopThree;
    var plxSpeedThree = 0.35;

    plxBackgroundThree.css('top', - (plxWindowTopToWindowTopThree * plxSpeedThree) + 'px');
  };
}

/**
 * Apply a class to each child
 * Required for IE8-
 */
$('.circle-container').children().each(function() {
  $(this).addClass('item'+($(this).index() + 1));
});
