/*
* ---------------------------------------------------------------------------
* jQuery Version
* ---------------------------------------------------------------------------
*/
var $window = $(window),
    $header = $('#main-header'),
    $default_logo = 'images/logo.svg',
    $small_logo = 'images/logo-shrink.svg';

$window.scroll(function(){
    
    if( $(this).scrollTop() >= $header.height() ){
        if( !$header.hasClass('shrink') ){
            $header.addClass('shrink');
            switchImages($small_logo);
            // $header.find('img').attr('src', $small_logo);
        }
    }else{
        if( $header.hasClass('shrink') ){
            $header.removeClass('shrink');
            switchImages($default_logo);
            // $header.find('img').attr('src', $default_logo);
        }
    }

})//window scroll

function switchImages(newPath){

    var $logo = $('#logo');
    $logo.fadeOut(300, function(){
        $logo.attr('src', newPath);
        $logo.fadeIn(300);
    })

}//switchImages function

/*
* ---------------------------------------------------------------------------
* Vanilla JavaScript Version
* ---------------------------------------------------------------------------
*/

