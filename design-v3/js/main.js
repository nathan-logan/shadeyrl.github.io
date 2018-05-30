$(".arrow").on("click", function(){
    $('html, body').animate({
        scrollTop: $(".tl-container").offset().top
    }, 1000);
});