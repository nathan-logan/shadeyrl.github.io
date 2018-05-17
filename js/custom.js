$(".btn").on("click", function(){
    $('html, body').animate({
        scrollTop: $("#section-c").offset().top
    }, 1000);
});

$(".btn-expand").on("click", function(){
    $("#section-play").slideToggle();
    $(this).find('i').toggleClass('fa-plus-square fa-minus-square');
});