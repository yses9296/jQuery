$(function(){
    //초기 스크롤 기준값
    var excuted = false;

    //스크롤 할 때
    $(window).scroll(function(){

        var threshold = $('.section2').offset().top - 300;

        if(!excuted){ //if(executed == false)
        
            if($(window).scrollTop() >= threshold){

                var progressRate = $('.animate').attr('data-rate');

                //animate progree 사용자 속성 값 percent ->> 60%
                /*
                    $('.box).animate({width: 100%, height: 100%}, DURATION, EASING, OTHERS..);
                    $('.box).animate({width: 100%, height: 100%}, 1500, easeOutQuint, function(){..});
                    $('.box).animate({width: 100%, height: 100%},
                        {
                            duration: 1500, 
                            easing: easeOutQuint, 
                            complete: function(){..}, 
                            progress: function{..}
                        };
                    })
                */

                $({percent: 0}).animate({percent: progressRate},{
                    duration: 1500,
                    progress: function(){
                        var now = this.percent;
                        // $('.animate').text(parseInt(now)+'%');
                        $('.animate').text(Math.ceil(now)+'%');
                    }
                });

                excuted = true;

            }//if (window scrollTop >= threshold)

        }// if (!executed)

    });

});