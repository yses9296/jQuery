$(function(){
    var $firstMenu = $('nav ul li'),
    $header = $('header');

    $firstMenu.mouseenter(function(){
        $header.stop().animate({height: '300px'}, 300);
    }).mouseleave(function(){
        $header.stop().animate({height: '50px'}, 300);
    });
});