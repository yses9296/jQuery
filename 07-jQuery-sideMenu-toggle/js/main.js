$(function(){
    var $duraion = 300;
    var $aside = $('aside');
    var $button = $aside.find('button');

    //Button 클릭 시 aside show
    /*
        in javascript 
        선택자.classList.add = 'open'

        A.addClass('b c'); A.removeCLass('b'); A.toggleClass('b');
        A.hasClass('b') >> 조건문에서만 사용. a요소에 b라는 클래스 존재시 true, 없을 시 false
    */    

    // 속성 변경하기, 속성의 값 반환하기.
    // var c = A.attr('b')  >> A라는 요소의 b라는 속성의 값을 변수명 c에 저장
    // A.attr('b', 'c') a라는 요소의 b라는 속성의 값을 c로 변경

    $button.click(function(){
        // $aside.animate({left: 0}, $duraion);

        $aside.toggleClass('active');
        
        if($aside.hasClass('active')){
            $aside.animate({left: '-60px'}, $duraion, 'easeOutBack');
            $button.find('img').attr('src', 'img/btn_close.png');
        }
        else{
            $aside.animate({left: '-350px'}, $duraion, 'easeInBack');
            $button.find('img').attr('src', 'img/btn_open.png');
        }
    });
});