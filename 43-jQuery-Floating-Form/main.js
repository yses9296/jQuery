$(function(){

    var $input = $('input'),
        $label = $('label');

    $input.click(function(){
        $(this).attr('placeholder', '');
        $(this).prev().addClass('label-top');
    });

});//document ready