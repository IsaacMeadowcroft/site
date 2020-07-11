topNav = document.getElementById("myTopnav");


if ($(window).width() > 600 && $(this).scrollTop() < 100) {
    blackNav();
} else if ($(window).width() > 600){
    whiteNav();
}else{
}

function toHome() {
    $(".topnav a").css("background-color", "transparent");
    $(".topnav a").css("color", "white");
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className == "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function blackNav() {
    $(".topnav a").css("color", "white");
    topNav.style.backgroundColor = "transparent";
    topNav.style.border = "none";
    $(".topnav a").hover(function () {
        $(".topnav a").css("color", "white");
        $(this).css("background-color", "transparent");
        $(this).css("color", "rgb(114, 99, 114)");
    });
    $(".topnav a").mouseout(function () {
        $(this).css("color", "white");
    });
}

function whiteNav() {
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
    if ($(window).width() > 600 && $(this).scrollTop() < 100) {
        blackNav();
    } else if ($(window).width() > 600){
        whiteNav();
    } else {}
});

$(window).on('scroll', function () {
    if ($(window).width() > 600) {
        scrollPosition = $(this).scrollTop();
        if (scrollPosition >= 100) {
            whiteNav();
        } else {
            blackNav();
            $(".topnav a").css("background-color", "transparent");
        }
    }else{
        scrollPosition = $(this).scrollTop();
        if (scrollPosition >= 50) {
            $(".topnav").css("background-color", "white");
            $(".topnav a").css("color", "black");
            topNav.style.borderBottom = "1px solid black";
        }else{
            $(".topnav").css("background-color", "transparent");
            $(".topnav a").css("color", "white");
            topNav.style.borderBottom = "none";
        }
    }
});


