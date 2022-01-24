$("input[type=checkbox]").on("click",function(){
    var checkCount = $('input:checkbox:checked').length;
    if(checkCount<=1)
    $('#result').html(checkCount+' box is checked');
    else
    $('#result').html(checkCount+' boxes are checked');
});