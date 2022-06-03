//Tab Menu
var tabLink = $('.tab-menu li'),
    tabContent = $('#tab-content div'),
    subLick = $('.sub-menu li'),
    currentLocation = location.href;

//탭 메뉴 클릭
tabLink.click(function(e){
    e.preventDefault();
    var targetIdx = $(this).index();
    activateTab(targetIdx);
})//tabLink click()

//서브 메뉴 클릭 
subLick.click(function(){
    var subMenuTarget = $(this).index();
    activateTab(subMenuTarget);
})//subLick click()



//외부 링크로 이동 (Top menu에서 submenu 클릭 시)
subLick.each(function(index){
    var compareURL = $(this).find('a').attr('href');
    var active = currentLocation.indexOf(compareURL);
    var blank = currentLocation.indexOf('#');

    if(active > -1){
        activateTab(index);
    }
    if (blank == -1){
        activateTab(0);
    }
})

//탭 메뉴 active
function activateTab(index){
    tabContent.hide();
    tabContent.eq(index).show();
    tabLink.find('a').removeClass('active');
    tabLink.eq(index).find('a').addClass('active')
}

//Top Menu
var mainMenu = $('.menu li');

mainMenu.mouseover(function(){
    $(this).find('.sub-menu').stop().slideDown(300);
}).mouseout(function(){
    $(this).find('.sub-menu').stop().slideUp(300);
})