$(function(){

    var $background = $('.full-bg '),
        $img = $('.full-bg img');

    /*
        width : height = 1.777 : 1
        full-bg-height
        var $windowHeight1 = $window.height(), 
            $windowWidth1 = $windowHeight * 1.777;

        full-bg-width
        var $windowWidth2 = $window.width(),
            $windowHeight2 = $windowWidth/1.777;
    */

    $(window).resize(function(){
        var $currentWindow = $(this),
            $windowWidth = $currentWindow.width(),
            $windowHeight = $currentWindow.height(),
            $browserRatio = $windowWidth / $windowHeight,
            $imgWidth = $img.width(),
            $imgHeight = $img.height(),
            $imageRatio =  $imgWidth / $imgHeight;

        if($imageRatio > $browserRatio){
  
            $background.css({
                height: '100%',
                width: $windowHeight * $imageRatio, //현대윈도우 높이 * 원래 이미지 비율
                left: ($windowWidth -$windowHeight * $imageRatio ) / 2, //브라우저 너비 - 이미지 너비
                top: 0
            });

        } else{
   
            $background.css({
                height: $windowWidth / $imageRatio, //이미지 너비 / 이미지 비율
                width: '100%',
                left: 0,
                top: ($windowHeight - $windowWidth/$imageRatio) / 2 // 브라우저 높이 - 이미지 높이
            });
        }

    });//resize

    //initial backroung size
    // $(window).trigger('resize');
    $background.css({
        width: $(window).width(),
        height: $(window).height()
    })

});//document ready