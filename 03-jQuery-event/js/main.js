$(function(){
    $('h1').css('color', 'red');

    //실행 지점 제어 - event종류 - mouseover 마우스가 올라왔을 때
    //on 메서드, bind('click' ...)  --> .on .off


    //$('선택자').on('이벤트종류', 할 일);
    $('#typo, h1').mouseover(function(){
        $(this).css('background-color', 'green');
    }).mouseout(function(){
        $(this).css('background-color', '#3498db');
    }); //typo mouseover mouseout

})

