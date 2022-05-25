$(function () {
    
    var $window = $(window),
        $header = $('.page-header'),
        $header_offset = $header.offset().top;
        // $header_postion = $header.position().top;

    $window.scroll(function(){

        if($(this).scrollTop() >= $header_offset){
            $header.addClass('sticky');
        } else {
            $header.removeClass('sticky');
        }   

    })//window scroll

});//ready function
