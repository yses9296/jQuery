$(function(){
    $('.hamburger-button').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.overlay').toggleClass('visible');
    })
})//document ready