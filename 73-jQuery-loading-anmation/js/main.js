$(function () {
    /*
        -본문의 이미지가 로드되는 상황을 모니터 (실시간 파악)
        - 진행률에 따라 막대 늘어나야, 숫자 변경.
        - 이미지 모두 로드되면 진행률 100%면, 모니터링을 중지하고 검은 화면 위로.
    */

    var $container = $('#progress'),
        $progressBar = $container.find('.progress-bar'),
        $progressTest = $container.find('.progress-text'),
    
        imgLoad = imagesLoaded( 'body' ),
        imgTotal = imgLoad.images.length, //전체 이미지 개수
        imgLoaded = 0, // 로드한 이미지 수
        current = 0,// 진행률 (퍼센트)
        progresstimer = setInterval(updateProgress, 1000/60);
        

        //이미지를 로드할 때 마다 로드한 이미지 수 늘려준다.
        /*
            A.animate({top: 100}, 1000, 'linear', function(){});
            A.animate({top:100}, {
                duration: 1000,
                easing: 'linear',
                complete: function(){},
                progress: function(){}
            })
        */

        imgLoad.on( 'progress', function() {
            imgLoaded++;  
        });
        
        function updateProgress(){
            //진행률 -> bar, text
            var target = (imgLoaded/imgTotal) * 100;

            // current = target;
            // current = current + (target - current) * 0.1;
            /*
                target 10, current 0.1
                ?  = 0.1 + (50 - 0.1) * 0.1
                0 = 0 + (10 - 0) * 0.1 
                ...
                current 90, target 100
                ? = 90 + (100 - 90) * 0.1
            */
            current += (target - current) * 0.1;

            $progressBar.css({width: current+'%'});
            $progressTest.text(Math.ceil(current)+'%')

            if(current > 99.9 ){
                clearInterval(progresstimer);
                $container.addClass('progress-complete');
                $progressBar.add($progressTest).delay(500).animate({opacity:0}, 250, function(){
                    $container.animate({top: '-100%'}, 1000,'easeInOutQuint');
                })
            }
        }//updateProgress


});//document reeady
