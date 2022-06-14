$(function(){
    
    var $section = $('.parallax > div'),
        $sectionInfo = [];

    $section.each(function(i){
        var $this = $(this);
        var upBtn = $this.find('span:first-child i');
        var downBtn = $this.find('span:last-child i');

        $sectionInfo.push($(this).offset().top);

        upBtn.click(function(e){
            e.preventDefault();
            if(i == 0) return;
            move(i-1);
            console.log(i)
        });
        downBtn.click(function(e){
            e.preventDefault();
            if(i == $sectionInfo.length-1) return;
            move(i+1);
        });
    });//section each function

    function move(idx){
        var target = $sectionInfo[idx];

        $('html, body').stop().animate({scrollTop: target}, 600);
    }

    console.log($sectionInfo)

    $section.css({position: 'fixed'});


    $(window).scroll(function(){
        var sct = $(this).scrollTop();

        $section.each(function(idx){
            var $this = $(this);
            var $newTop = $sectionInfo[idx] - sct;

            if(sct > $sectionInfo[idx]){
                $newTop = $newTop * 0.5;
            }

            $this.css({top: $newTop});
        });


    })//window scroll

})//document ready