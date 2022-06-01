$(function(){

	var menu = $('#gnb > li');
	var wrap = $('#gnbWrap');
	var menuHeight = menu.find('> a').height();
	var subList = menu.find('.sGnbArea ul li');
	var pageURL = location.href;
	var activeMenu;

	//  menu 에 마우스를 올리면 할일.
	
	menu.mouseover(function(){ 		
		$(this).addClass('on').siblings().removeClass('on');			
		var totalHeight = menuHeight + $(this).find('.sGnbArea').height();  
		wrap.stop().animate({height:totalHeight});		
	})
	.mouseout(function(){
		$(this).removeClass('on');	
		wrap.stop().animate({height:menuHeight});
		onActive();
	});
	
	//서브메뉴에 마우스오버시 색상 바꾸기
	subList.mouseover(function(){
		$(this).addClass('on').siblings().removeClass('on');		
	})
	.mouseout(function(){
		subList.removeClass('on');
		onActive(); // 서브메뉴의 링크값과 일치하면 서브메뉴를 열어놓기 위해서.
	});	
	
	subList.each(function(){
		var cm = $(this);
		var subURL = cm.find('a').attr('href');
		var active = pageURL.indexOf(subURL); //blankLink 값이 -1보다 크면 해당 페이지.
		var blankLink = pageURL.indexOf('#'); //blankLink 값이 -1보다 크면 빈 페이지.

		if(active > -1 && blankLink == -1) activeMenu = cm;
	})

	onActive();

	function onActive(){
		if(activeMenu) activeMenu.trigger('mouseover');
	}

});//document ready
