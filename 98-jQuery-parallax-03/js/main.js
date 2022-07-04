$(function(){
    var $section = $('.parallax > div'),
        $sectionInfo = [],
        $currentSection = 0;

    $section.each(function(i){
        var $this = $(this);
        var $upBtn = $this.find('.arrow .upBtn');
        var $downBtn = $this.find('.arrow .downBtn');

        $sectionInfo.push($this.offset().top);

        $upBtn.click(function(e){
            e.preventDefault();
            if(i == 0) {
                return;
            }
            else {
                move(i-1);
            }
        });
        $downBtn.click(function(e){
            e.preventDefault();
            if (i == $sectionInfo.length - 1){
                return;
            }
            else {
                move(i+1);
            }
        });

    });//section each

    function move(index){
        var scr = $sectionInfo[index];

        $('html, body').stop().animate({scrollTop: scr}, 600);
        $currentSection = index;
    }

    $section.css({position: 'fixed'})

    $(window).scroll(function(){
        var sct = $(this).scrollTop();

        $section.each(function(index){
            var $thisSection = $(this);
            var $newTop = $sectionInfo[index] - sct;

            if(sct > $sectionInfo[index]){
                $newTop *= 0.5;
            }

            $thisSection.css({top: $newTop});
        })

        

    })//window scroll event


    $section.mousewheel(function(e){
        var excuted = false; //스위치 역할.
        if(!excuted){

            console.log(e.deltaY)
            if(e.deltaY == -1){
                move($currentSection + 1)
            }
            else {
                move($currentSection - 1)
            }
            excuted = true;
            
        }

        setTimeout(function(){excuted = false}, 300)
    })
})//document ready