$(function () {
	var tabAnchor = $('.tabs-nav li'),
		tabPanel = $('.tabs-panel');
	
	tabAnchor.click(function(e){
		e.preventDefault();

		$(this).find('a').addClass('active').parent().siblings().find('a').removeClass('active');
		//var NewLink = $(this).attr('href');
		
		tabPanel.hide();

		var $targetIdx = $(this).index();
		tabPanel.eq($targetIdx).show();
		
	});
	
	// .trigger 방아쇠를 당기다.
	// 창을 열자마자 work01이 나오도록 유도.
	tabAnchor.eq(0).trigger('click');
});

