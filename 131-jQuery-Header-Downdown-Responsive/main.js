$(function(){
    let header = $('header'),
        menu = header.find('nav > ul > li'),
        headerHeight = header.outerHeight(),
        newHeight = 0,
        subMenu = menu.find('ul');

    //subMenu 높이 구하기
    subMenu.each(function(){
        if( $(this).outerHeight() > newHeight){
            newHeight = headerHeight + $(this).outerHeight();
        }
    })

    menu.hover(
        function(){
            header.stop().animate({height: newHeight});
        },
        function(){
            header.stop().animate({height: headerHeight})
        }
    );
    
})//document ready
