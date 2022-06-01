$(function(){

    var $menu = $('#gnb li'); //main_menu li && sub_menu li
    var $wrap = $('#gnbWrap');
    var $height = $wrap.outerHeight();

    $menu.mouseover(function(){
        $(this).addClass('on').siblings().removeClass('on');
        var totalHeight = $height + $(this).find('.sGnbArea').outerHeight();
        $wrap.stop().animate({height: totalHeight});

    }).mouseleave(function(){
        $(this).removeClass('on');
        $wrap.stop().animate({height: $height});
    })

});