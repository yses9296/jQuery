$(function(){
    /*
        첫 번째 메뉴에 마우스가 들어오면, 마우스가 들어온 스 메뉴의 서브 메뉴의 높이를 변수명 subhHeight로 지정.
        기존 header 높이에 더한 값을 header 높이로 0.3s걸처 애니메이트
    */

    /*
        A.height() >> 알맹이
        A.innerHeight() >> 패딩
        A.outerHeight() >> 보더
        A.outerHeight(true) >>마진
    */
    var $menu = $('nav > ul > li'),
        $header = $('header'),
        $headerHeight = $header.outerHeight();

    $menu.mouseenter(function(){

        var currentMenu = $(this);
        var $subHeight = $(this).find('ul').outerHeight();

        $header.stop().animate({height: $headerHeight+$subHeight+'px'}, 300);
        //setTimeout(할 일, 시간)
        setTimeout(function(){
            currentMenu.find('ul').show();
        }, 200)
        

    })//mouseenter
    .mouseleave(function(){

        var currentMenu = $(this);

        $header.stop().animate({height: $headerHeight+'px'}, 300);
        setTimeout(function(){
            currentMenu.find('ul').hide();
        }, 200)

    })//mouseleave
});