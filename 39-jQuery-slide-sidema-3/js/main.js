$(function(){
    var slideIndex = 0; //초기값 0
	var numSlides = $('.slide').length;
	var pagerBtn = $('.btn-nav');


	const slideshow = new Siema({
	  selector: '.slider',
	  loop: true,
	  threshold: 200,
	  onchange: function(){
		  updateNav(this.currentSlide); //보완 수정 필요
	  }
	});

	$(".prev").on("click", function() {
	  slideshow.prev();

	  if(slideIndex > 0){
		slideIndex--;
	  }
	  else{
		slideIndex = numSlides-1;
	  }
	  updateNav(slideIndex);
	});

	$(".next").on("click", function() {
	  slideshow.next();
	  
	  if(slideIndex < numSlides-1){
		slideIndex++;
	  } else {
		slideIndex = 0;
	  }
	  updateNav(slideIndex);
	});

	function updateNav(index){
		pagerBtn.eq(index).addClass('active').siblings().removeClass('active');
	}

	/*
	pagerBtn을 클릭하면 클릭된 그 요소의 인덱스 번호를 goTo()메서드에 매개변수로 넘겨서 슬라이드 작동하도록.
	*/
	pagerBtn.click(function(){
		var idx = $(this).index();
		slideshow.goTo(idx);
		$(this).addClass('active').siblings().removeClass('active');
		slideIndex = idx;
	});
	pagerBtn.eq(0).trigger('click');

})