$(function(){

    $('.hamburger-button').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    })
})//document ready