$(function(){
    var $section = $('.parallax > div'),
        $sectionInfo = [];

    $section.each(function(i){
        var $this = $(this);
        var $upBtn = $this.find('.arrow > a:eq(0)');
        var $downBtn = $this.find('.arrow > a:eq(1)');

        $sectionInfo.push($this.offset().top);

        $upBtn.click(function(e){
            e.preventDefault();
            move(i-1);
        });
        $downBtn.click(function(e){
            e.preventDefault();
            move(i+1);
        });

    });//section each

    function move(index){
        var scr = $sectionInfo[index];
        $('html, body').stop().animate({scrollTop: scr}, 600, 'easeOutCubic')
    }

    $section.css({position: 'fixed'})

    $(window).scroll(function(){
        var sct = $(this).scrollTop();

        $section.each(function(index){
            var $this = $(this);
            var $newTop = $sectionInfo[index] - sct;

            if(sct > $sectionInfo[index]){
                $newTop *= 0.5;
            }

            $this.css({top: $newTop});
        })

        

    })//window scroll event

})//document ready