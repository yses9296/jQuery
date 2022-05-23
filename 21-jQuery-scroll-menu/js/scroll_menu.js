// $(document).ready(function(){})
$(function(){
    var $menu = $('#top_menu ul li'),
        $contents = $('#contents > div');
    
    // 메뉴 클릭 시 active , section 이동
    $menu.click(function(e){
        e.preventDefault();

        // $(this).addClass('on').siblings().removeClass('on');

        var idx = $(this).index();
        var $target = $contents.eq(idx);
        var $targetOffset = $contents.eq(idx).offset().top;
        $('html, body').stop().animate({scrollTop: $targetOffset}, 300);
    });

    // 윈도우 스크롤 발생 시 메뉴 active 실행
    $(window).scroll(function(){

        $contents.each(function(){

            var $offset = $(this).offset().top;
            var $index = $(this).index();

            if($(window).scrollTop() >= $offset - 140){
                $menu.eq($index).addClass('on').siblings().removeClass('on');
            }
        });

    });
});