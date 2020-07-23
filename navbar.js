topNav = document.getElementById("myTopnav");
navSwitch();
switchLandingImage();

$(document).ready(function() {
    $('#home-link').click(function(e) {
      e.preventDefault();
  
      $('html, body').animate({
        scrollTop: $('#land').offset().top
      }, 500);
    });
  });

  $(document).ready(function() {
    $('#about-link').click(function(e) {
      e.preventDefault();
  
      $('html, body').animate({
        scrollTop: $('#about').offset().top - document.getElementById("myTopnav").clientHeight
      }, 500);
    });
  });

  $(document).ready(function() {
    $('#experience-link').click(function(e) {
      e.preventDefault();
  
      $('html, body').animate({
        scrollTop: $('#experience').offset().top - document.getElementById("myTopnav").clientHeight
      }, 500);
    });
  });

  $(document).ready(function() {
    $('#resume-link').click(function(e) {
      e.preventDefault();
  
      $('html, body').animate({
        scrollTop: $('#resume').offset().top - document.getElementById("myTopnav").clientHeight
      }, 500);
    });
  });

  $(document).ready(function() {
    $('#contact-link').click(function(e) {
      e.preventDefault();
  
      $('html, body').animate({
        scrollTop: $('#contact').offset().top - document.getElementById("myTopnav").clientHeight
      }, 500);
    });
  });

function switchLandingImage(){
    if($(window).width() <= 600){
        $(".codes img").attr('src', 'code.jpg');
    }else{
        $(".codes img").attr('src', 'code2.jpg');
    }
}

function navSwitch() {
    if ($(this).scrollTop() < 100) {
        transNav();
    } else {
        whiteNav();
    }
}

function toHome() {
    transNav();
    $("#home").css("background-color", "transparent");
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className == "topnav") {
        x.className += " responsive";
        whiteNav();
    } else {
        x.className = "topnav";
        navSwitch();
    }
}

function transNav() {
    $(".topnav a").css("animation-play-state", "running");
    $(".topnav a").css("background-color", "transparent");
    $(".topnav a").css("color", "white");
    topNav.style.backgroundColor = "transparent";
    topNav.style.border = "none";
    $(".topnav a").hover(function () {
        $(".topnav a").css("color", "white");
        $(this).css("background-color", "transparent");
        $(this).css("color", "rgb(138, 122, 138)");
    });
    $(".topnav a").mouseout(function () {
        $(this).css("color", "white");
    });
}

function whiteNav() {
  $(".topnav a").css("animation-play-state", "paused");
    topNav.style.backgroundColor = "white";
    topNav.style.borderBottom = "1px solid black";
    $(".topnav a").css("color", "black");
    $(".topnav a").hover(function () {
        $(this).css("background-color", "lightgrey");
        $(".topnav a").css("color", "black");
    });
    $(".topnav a").mouseout(function () {
        $(this).css("background-color", "transparent");
    });
}

$(window).on('resize', function (event) {
    switchLandingImage();
    var x = document.getElementById("myTopnav");
    x.className = "topnav";
    navSwitch();
});

$(window).on('scroll', function () {
    var x = document.getElementById("myTopnav");
    x.className = "topnav";
    navSwitch();
});




