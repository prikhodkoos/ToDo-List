var items = $("li");

$(".fa-plus").on("click", function() {
    $(this).toggleClass("rotate");
	$("input[type='text']").toggleClass("hidden");
});

$("input").keypress(function(key) {
    if (key.which === 13) {
        var newText = $(this).val();
        var newTodo = $(` <li class='new'><span><i class="fas fa-trash"></i></span>${newText}</li>`).prependTo("ul");
        
        setTimeout(function() {
            newTodo.removeClass( 'new');
        }, 500)
        $(this).val("");
        items = $("li");
    }
});

$( "ul" ).on( "click", "span", function(e) {
    $(this).parent().css("color","transparent");
    $(this).css("color","transparent");
    $(this).parent().addClass("delete");
    $(this).parent().fadeOut(500,function() {
        $(this).remove();
    });
    e.stopPropagation();
});

$( "ul" ).on( "click", "li", function() {
    $(this).toggleClass("done");
});