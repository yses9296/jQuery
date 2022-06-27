$(function(){
    var $section = $('.parallax > div'),
        $sectionInfo = [];

    $section.each(function(){
        var $this = $(this);
        $sectionInfo.push($this.offset().top);
    });

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