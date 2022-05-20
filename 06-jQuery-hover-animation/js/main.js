$(function(){
    var $duration = 300;
    var $button = $("#buttons2 button");

    // 버튼들의 높이 -40, 0, 40, 80, 120...
    $button.each(function(index){
        $(this).css("top", (index * 40) -40 +'px');
    })
    .mouseover(function(){
        $(this).stop().animate({backgrouundColor: 'yellow', color: '#000'}, $duration);
        $(this).find('img:first-child').stop().animate({opacity: 0}, $duration);
        $(this).find('img:nth-child(2)').stop().animate({opacity: 1}, $duration);
    })
    .mouseout(function(){
        $(this).stop().animate({backgrouundColor: '#fff', color: '#01b169'}, $duration);
        $(this).find('img:first-child').stop().animate({opacity: 1}, $duration);
        $(this).find('img:nth-child(2)').stop().animate({opacity: 0}, $duration);
    })

    /* 
    // javascript 
        var $buttons = document.getElementsByTagName('button');
        for (var i = 0; i < $buttons.length; i++){
            $buttons[i].style.top = (i * 40) - 40 + 'px';
        }
    */
});