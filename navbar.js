topNav = document.getElementById("myTopnav");

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className == "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

if ($(window).width() > 600) {
    topNav.style.backgroundColor = "transparent";
    topNav.style.border = "none";
    $(".topnav a").hover(function () {
        $(this).css("background-color", "transparent");
        $(this).css("color", "white");
    });
    $(".topnav a").mouseout(function () {
        $(this).css("color", "black");
    });
    $(window).scroll(function () {
        scrollPosition = $(this).scrollTop();
        if (scrollPosition >= 100) {
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
        } else {
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
    });
}
