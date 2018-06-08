// Check off completed items
$("ul").on("click", ".item", function(){
    $(this).toggleClass("checked");
});

$("ul").on("click", ".delete", function(e){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    e.stopPropagation();
});
// new todo item from input
$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        // grab input
        var newTodo = $(this).val();
        $(this).val("");
        // add input to list
        $("ul").append('<li class="item"><span class="delete"><i class="fas fa-trash-alt"> </i> </span>' + newTodo + '</li>');
    }
});

// $(".fa-ellipsis-h").click(function(){
//     $("input[type='text']").fadeToggle();
// });

$(".fa-ellipsis-h").click(function(){
    $("#list").slideToggle();
});