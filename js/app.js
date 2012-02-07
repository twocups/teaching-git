$(document).ready(function(){
    $("form").submit(function(e){
        e.preventDefault();
        e.stopPropagation();
        var name = $("input[name='name']").val();
        //put a greeting on the page
    });
});
