/*
// case 1 : click function()
$('.question').click(function(){

    $(this).next().slideToggle().siblings('.answer').slideUp();

});

$('.question').eq(0).trigger('click');
*/

// case 2: jqueryui Library
$( function() {
    $( ".qna_list" ).accordion();
} );