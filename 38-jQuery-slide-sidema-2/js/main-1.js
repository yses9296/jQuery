$(function(){
	
	const mySiema =  new Siema({
						selector: '.slider',
						loop: true,
						threshold: 200,
						duration: 1000,
						perPage: 2
					});

	$('.prev').click(function(){
		mySiema.prev();
	});
	$('.next').click(function(){
		mySiema.next();
	});
	
	//4초마다 다음 슬라이드로 자동이동
	//setInterval
	/*
	function autoSlide(){
		var timer = setInterval(function(){
			mySiema.next();	
		}, 4000);

		$('.slider').mouseover(function(){
			clearInterval(timer);
		}).mouseleave(function(){
			autoSlide();
		});
	}

	autoSlide();
	*/

})