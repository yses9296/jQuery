$(function(){
    var scrollTop = $(window).scrollTop(),
        notePad = $('.notepads');

	$(window).scroll(function(){
        if( $(this).scrollTop() > 300){
            notePad.addClass('active');
        }
        else {
            notePad.removeClass('active');
        }
    });

});


