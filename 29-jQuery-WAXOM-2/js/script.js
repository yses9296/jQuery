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
    var $serviceExecuted = false;
    var $counterExecuted = false;

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
        
            //if(!$serviceExecuted) {
        if ($scrollTop  >= $service_offset + $serviec_height){
            $services.addClass('active');
        }
            //else{$services.removeClass('active');}
            // $serviceExecuted = true; }

    //couters 숫자 animate
        var $counter = $('.counters');
        var $counter_item = $counter.find('h3');
        var $counter_height = $counter.height();
        var $counter_offset = $counter.offset().top;
        var $target_offset = $counter_offset - $counter_height*2;

        if(!$counterExecuted){
            if($scrollTop >= $target_offset){

                $counter_item.each(function(){

                    var $current = $(this);
                    var $data_rate = $current.attr('data-rate');

                    $({rate: 0}).animate({rate: $data_rate},{
                        duration: 2000,
                        progress: function(){
                            var progress = this.rate;
                            $current.text(Math.ceil(progress));
                        }
                    })//rate-animate
                })//counter_item each'

                $counterExecuted = true;
            }
        }//counterExecuted
    });//scroll()

    //video
    var $source = $('.video iframe').attr('src');
    var $autoPlay = $source.concat('?autoplay=1');

    $('.video .icon').click(function(e){
        e.preventDefault();
        $('#overlay').addClass('visible');
        $('.video iframe').attr('src', $autoPlay);
    })
    $('.video .close').click(function(e){
        e.preventDefault();
        $('#overlay').removeClass('visible');
        $('.video iframe').attr('src', $source);
        // case2 : replace('?autoplay=1','')
    })

});//ready(function(){})


