$("ul").on('click','li',function(){
    $(this).toggleClass("edit_li");
});

$("ul").on('click','span',function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
    if(event.which === 13){
        var newItem = $(this).val();

        $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i> </span>"+newItem+"</li>");
        $(this).val("");

    }


});

$(".fa-pencil-square-o").click(function(){

    $("input[type='text']").fadeToggle();
})
