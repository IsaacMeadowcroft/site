topNav = document.getElementById("myTopnav");

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className == "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function transNav() {
    topNav.style.backgroundColor = "transparent";
    topNav.style.border = "none";
    $(".topnav a").hover(function () {
        $(this).css("background-color", "transparent");
        $(this).css("color", "white");
    });
    $(".topnav a").mouseout(function () {
        $(this).css("color", "black");
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
        transNav();
    } else {
        whiteNav();
    }
});

$(window).on('scroll', function () {
    if ($(window).width() > 600) {
        scrollPosition = $(this).scrollTop();
        if (scrollPosition >= 100) {
            whiteNav();
        } else {
            transNav();
        }
    }
});
