$(function(){
    var $btnSubmit = $('#btnSubmit');
    var $field = $('.form-control');

    $btnSubmit.click(function(e){
        e.preventDefault();//임시 버튼 기능 정지

        $field.each(function(){
            var $value = $(this).val();
            
            if(!$value){
                $(this).addClass('error');
            }
        })
    })


})//document ready()