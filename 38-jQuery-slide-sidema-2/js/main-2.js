$(function(){
    var slideIndex = 0;
	var numSlides = $('.slide').length;
	var pagerBtn = $('.btn-nav');

	// Slide swiper
	const slideshow = new Siema({
	  selector: '.slider',
	  loop: true,
	  threshold: 200
	});

	$(".prev").click(function() {
	  slideshow.prev();
	});

	$(".next").click(function() {
	  slideshow.next();
	});
	/*
	pagerBtn을 클릭하면 클릭된 그 요소의 인덱스 번호를 goTo()메서드에 매개변수로 넘겨서 슬라이드 작동하도록.
	*/
	pagerBtn.click(function(){
		var idx = $(this).index();
		slideshow.goTo(idx);
		$(this).addClass('active').siblings().removeClass('active');
	});
	pagerBtn.eq(0).trigger('click');


})