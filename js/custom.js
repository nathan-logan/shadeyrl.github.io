$(".btn").on("click", function(){
    $('html, body').animate({
        scrollTop: $("#section-c").offset().top
    }, 1000);
});

$(".btn-expand").on("click", function(){
    $("#section-play").slideToggle();
    $(this).find('i').toggleClass('fa-plus-square fa-minus-square');
});

var countdown = $(".timeleft");
var seasonEndDate = new Date("Jun 1, 2018 12:00:00").getTime();

// Update every second
var invtl = setInterval(() => {
    // get todays date and time in ms
    var now = new Date().getTime();

    // distance to season end
    var distance = seasonEndDate - now;

    // time calc
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / (1000));

    // display result

    $(countdown).text(days + "d " + hours + "h " + mins + "m " + seconds + "s");

    // if end date passed

    if(distance < 0) {
        // stop countdown
        clearInterval(invtl);
        // output text
        countdown.style.color = "#17a2b8";
        countdown.innerHTML = "complete!";
    }

}, 1000);