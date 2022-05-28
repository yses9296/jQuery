$(function(){
	
	/* ---------- 기본 사용 ---------- */

      $('.basic_slider').bxSlider({
		  mode: 'horizontal',
		  speed: 2000
	  });


	/* ---------- 좌우 컨트롤 ---------- */

	$('.control_slider').bxSlider({
		//controls:false
		nextText : '<i class="fas fa-chevron-right"></i>',
		prevText : '<i class="fas fa-chevron-left"></i>',
		pager:false
	});

	$('.img_control_slider').bxSlider({
		//controls:false,
		pager:false,
		prevSelector:'.img_controls .imgcontrols .prev',
		nextSelector:'.img_controls .imgcontrols .next'
	});

	/* ---------- 멀티플 슬라이드 ---------- */
	$('.multiple_slider').bxSlider({
		pager:false,
		minSlides: 2,
		maxSlides: 4,
		moveSlides: 1,
		slideWidth: 200,
		slideMargin: 30
	});


	/* ---------- 현재 슬라이드 구분하기 ---------- */

	$('.active_slider').bxSlider({
		// onSliderLoad: function(){
		// 	$('.active_slider li').removeClass('active');
		// },
		onSliderLoad: function(currentIndex){
			// $('.active_slider li').eq(currentIndex+1).addClass('active');
			$(this).find('li').eq(currentIndex+1).addClass('active');
		},
		onSlideAfter: function($slideElement){
			$slideElement.addClass('active').siblings().removeClass('active');
		}
	});



	/* ---------- 슬라이드 옵션 활용 이전,다음, 슬라이드 이동 ---------- */
	var manualSlide = $('.manual_control_slider').bxSlider({
		pager: false,
		controls: false
	})
	$('.manual_controls span').click(function(){
		if ($(this).hasClass('prev') ){//prev button
			manualSlide.goToPrevSlide();
		}else{ //next button
			manualSlide.goToNextSlide();
		}
	})//manual_controls
	$('.manual_pager span').click(function(){
		var index = $(this).index();
		manualSlide.goToSlide(index);
	})//manual_pager
	


	/* ---------- 자동 슬라이드 ---------- */
	$('.auto_slider').bxSlider({
		auto: true,
		autoHover: true,
		autoControls : true,
		pause: 2000
	});
	

	/* ---------- 동영상 제어하기 ---------- */
	/*
	$(".video_slides video").fitVids();
	$('.video_slides').bxSlider({
		video: true,
		onSliderLoad: function(currentIndex){
			//permission chrome 동영상 재생 저작권 문제로 불가
			$(this).find('div').eq(currentIndex+1).find('video').get(0).play();
			// console.log()
			// $(".video_slides div").eq(currentIndex+1).find('video').get(0).play();
			// var video = $(this).find('video')[0];
			// video.play();
		},
		onSlideAfter: function($slideElement){
			$slideElement.siblings().find('video').get(0).stop();
			$slideElement.find('video').get(0).play();
		}

	});
	*/


	/* ---------- 탭 연동 ---------- */
	var tabSlides= $('.tab_slide').bxSlider();
	
	$( ".slide_tab" ).tabs({
		activate: function( event, ui ){
			// ui.newPanel = 
			tabSlides.reloadSlider();
		}
	});
	
	
});//document ready jquery 