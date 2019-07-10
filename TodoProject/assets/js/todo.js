// Check off specific todos by clicking
$('ul').on("click", "li", function () {
    $(this).toggleClass('completed');
});

// Click on X to delete todo
$("ul").on("click", "span",function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
    // check if press enter
    if (event.which === 13) {
        // extract the input
        var newTodo = $(this).val();
        // append the input to the ul
        $('ul').append("<li><span><i class='fas fa-trash-alt'></i></span> " + newTodo + "</li>");
        // clear the input
        $(this).val("");
    }
});

$("#menu").click(function(){
    $("input[type='text']").fadeToggle(200, function(){
        $("#menu").toggleClass("fa-chevron-circle-up");
        $("#menu").toggleClass("fa-chevron-circle-down")
    });
});