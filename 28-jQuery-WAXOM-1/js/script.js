$(function() {	
    $('.posts_list').bxSlider({
        minSlides: 1,
        maxSlides: 3,
        moveSlides: 1,
        slideWidth:370,
        slideMargin : 30,
        pager:false,
        nextSelector: '.recent_posts .controls .next',
        prevSelector :'.recent_posts .controls .prev' 
    });

    //Mobile menu drop
    $(".toggle").click(function(){
        $(".main-menu").slideToggle();
    }); 
    
    // 사이즈 변경 시 메뉴 변경
    $(window).resize(function(){
        if($(window).width() > 768){
            //참이면 할일
            $(".main-menu").show();
        } else{
            //거짓이면 할일
            $(".main-menu").hide();
        }
    
    });

    //상단 메뉴 고정
	$(window).scroll(function(){
        var $scrollTop = $(window).scrollTop();
        var $header = $('header');
        if ($scrollTop >=  $header.height()){
            $header.addClass('sticky');
        }else{
            $header.removeClass('sticky');
        }

        //services service_item 나타내기 
        var $services = $('.services');
        var $service_offset = $services.offset().top/2;
        var $serviec_height = $services.height()/3;
        // var $serviceExecuted = false;
            //if(!$serviceExecuted) {
        if ($scrollTop  >= $service_offset + $serviec_height){
            $services.addClass('active');
        }
            //else{$services.removeClass('active');}
            // $serviceExecuted = true; }
    });



});//ready(function(){})


