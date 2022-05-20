$(function(){
    var $duration = 300;
    var $images = $("#images p");

    // 첫 번째 captio >> span, strong animate method 사용
    $images.filter(':nth-child(1)').mouseover(function(){
        $(this).find('span, strong').animate({opacity: 1}, $duration);
    }).mouseout(function(){
        $(this).find('span, strong').animate({opacity: 0}, $duration);
    });

    //두 번째 caption >> strong left 0으로
    $images.filter(':nth-child(2)').mouseover(function(){
        $(this).find('span').stop().animate({opacity: 1}, $duration);
        $(this).find('strong').stop().animate({opacity: 1, left: '0%'}, $duration);
    }).mouseout(function(){
        $(this).find('span').stop().animate({opacity: 0}, $duration);
        $(this).find('strong').stop().animate({opacity: 0, left: '-200%'}, $duration);
    })

    //세 번째 caption >> strong top 0으로
    $images.filter(':nth-child(3)').mouseover(function(){
        $(this).find('span').stop().animate({opacity: 1}, $duration);
        $(this).find('strong').stop().animate({opacity: 1, bottom: '0px'}, $duration);
    }).mouseout(function(){
        $(this).find('span').stop().animate({opacity: 0}, $duration);
        $(this).find('strong').stop().animate({opacity: 0, bottom: '-80px'}, $duration);
    })
});