$(function () {

    var $window = $(window),
        $header = $('.page-header'),
        $headerClone = $header.contents().clone()
        $headerCloneContainer = $('<div class="page-header-clone"></div> '),
        $threshold = $header.offset().top + $header.outerHeight();

        //test 1:
        // $clone = $header.clone(),
        // $newHeader = $clone.removeClass('page-header').addClass('page-header-clone');

        $headerCloneContainer.append($headerClone);
        $headerCloneContainer.appendTo('body');

    // $window.scroll(function(){
    $window.on('scroll', $.throttle(1000/15, function(){  //$.throttle(1000/15,  >> 브라우저 로드 빈수를 적게.
        if($(this).scrollTop() >= $threshold){
            $headerCloneContainer.addClass('visible');
        }else {
            $headerCloneContainer.removeClass('visible');
        }
    })
    );//window scroll



});
