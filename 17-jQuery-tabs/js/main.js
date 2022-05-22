$(function () {
    var tabAnchor = $('.tabs-nav li a'),
        tabPanel = $('.tabs-panel');

    //링크를 클릭하면 할 일
    tabAnchor.click(function(e){
        e.preventDefault();

        // Tab Menu Active 
        //case 1:
        tabAnchor.removeClass('active');
        $(this).addClass('active')

        //case 2:
        // $(this).addClass('active').siblings().removeClass('active');
        // >> 불가능 >> li 안에 a 태그는 각각 하나씩 존재, 형제자매X >> siblings() 사용불가

        tabPanel.hide();

        var $target = $(this).attr('href');
        $($target).show();
    })
});

