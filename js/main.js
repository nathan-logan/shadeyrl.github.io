$(document).ready(function(){
    $(".headline").animate({
        opacity: "1"
    });
    $("#biline").animate({
        opacity: "1"
    });
    $(".box").animate({
        opacity: "0.15"
    });
    $(".boxdisc").animate({
        opacity: "0.15"
    });
});

$(".box").on("mouseenter", function(){
    $(this).animate({
        opacity: "1",
    });   
});

$(".box").on("mouseleave", function(){
    $(this).animate({
        opacity: "0.15",
    });   
});

$(".boxdisc").on("mouseenter", function(){
    $(this).animate({
        opacity: "1",
    });   
});

$(".boxdisc").on("mouseleave", function(){
    $(this).animate({
        opacity: "0.15",
    });   
});

// $("#expand").on("click", function(){
//     if($("#navbar").css("width") === "70px"){
//         $("#navbar").css("width", "200px");
//         $("#navbar-items").css("width", "200px");
//         $(".logo img").css({
//             "width": "175px",
//             "height": "175px"});
//         $("#expand").find("i").removeClass("fa-chevron-circle-right").addClass("fa-chevron-circle-left");
//     }
//     else {
//         $("#navbar").css("width", "70px");
//         $("#navbar-items").css("width", "70px");
//         $("#expand").find("i").addClass("fa-chevron-circle-right").removeClass("fa-chevron-circle-left");
//         $(".navText").css("display", "none");
//         $(".logo img").css({
//             "width": "70px",
//             "height": "65px"});
//     }

// });
// $("#expand").on("click", function(){
//     $("#navbar").animate({
//         width: '60px'
//     });
//     $(".navText").css("display", "none");
// });

// .fas fa-chevron-circle-right
// .fas fa-chevron-circle-left