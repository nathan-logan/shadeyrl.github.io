$(".arrow").on("click", function(){
    $('html, body').animate({
        scrollTop: $("#arrow-anchor").offset().top
    }, 1250);
});

$(document).scroll(function(){
        if($(window).scrollTop() === 0) {
            $(".nav").removeClass("scrolled");
        }
        else {
            $(".nav").addClass("scrolled");
        }
    })