$(document).ready(function(){
    $("form").submit(function(e){
        e.preventDefault();
        e.stopPropagation();
        var name = $("input[name='name']").val();
        $('span.name').text(name);
        //put a greeting on the page
    });
});
