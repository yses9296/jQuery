//Tab Menu
var tabLink = $('.tab-menu li'),
    tabContent = $('#tab-content div'),
    subLick = $('.sub-menu li');

tabLink.add(subLick).click(function(e){
    e.preventDefault();
    var targetIdx = $(this).index();
    activateTab(targetIdx);
})//tabLink click()

function activateTab(index){
    tabContent.hide();
    tabContent.eq(index).show();
    tabLink.find('a').removeClass('active');
    tabLink.eq(index).find('a').addClass('active')
}

tabLink.eq(0).trigger('click')


//Top Menu
var mainMenu = $('.menu li');

mainMenu.mouseover(function(){
    $(this).find('.sub-menu').stop().slideDown(300);
}).mouseout(function(){
    $(this).find('.sub-menu').stop().slideUp(300);
})