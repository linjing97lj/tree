$(function() {
    $(window).scroll(function() {
        if($(document).scrollTop() >= 75) {
            $(".header-two").addClass("headerNav").slideDown();
        } else {
            $(".header-two").removeClass("headerNav");
            $(".header-two").show();
        }
    })
})


