$(function () {

    var $goTop = $('.go_top');

    $(window).scroll(function(){

        if($(this).scrollTop() >= 500){
            $goTop.fadeIn('slow');
        }else{
            $goTop.fadeOut('slow');
        }

    });
	
    $goTop.click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({scrollTop: 0}, 300);
    });

});
