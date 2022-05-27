$(function(){
    $('.carousel').carousel();

    var $prev = $('.prev'),
        $next = $('.next');
    
    $prev.click(function(){
        $('.carousel').carousel('prev');
    })
    $next.click(function(){
        $('.carousel').carousel('next');
    })
})