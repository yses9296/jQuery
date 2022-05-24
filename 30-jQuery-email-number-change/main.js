$(function(){

    //이메일 도메인 선택 필드
    var $selectEmail = $('.select_domain'),
        $targetInput = $('.email_domain');

    $selectEmail.change(function(){
        var $domain = $(this).val();
        $targetInput.val( $domain);
    })

    //제품 개수 변경
    var $countNum = $('.count'),

        $price = parseInt($('.unitprice').attr('data-uniprice')),
        // $unit = $('.unitprice').text(),
        // $price = parseInt($unit.replace(',','')),
        $currentNumber = parseInt($countNum.text()),
        $totalPrice = $('.total');
    
    $('span a').click(function(e){
        e.preventDefault();
        if($(this).hasClass('plus')){
            $currentNumber += 1;
        }else{
            if($currentNumber > 0){
                $currentNumber -= 1;
            }
        }
        $countNum.text($currentNumber);

        var $semiTotal = $price * $currentNumber;
        //case 1: 
        // var $total = Number($semiTotal).toLocaleString('en');
        // $totalPrice.text($total);
        
        //case2: 
        $totalPrice.text($semiTotal);
        $('.number').number( true );

    });

    $('.number').number( true );
/*
    var $addBtn = $('#plus'),
        $removeBtn = $('#minus'),
        $currentNum = 1,
        $total = $currentNum * $price;

    $addBtn.click(function(e){
        e.preventDefault();
        $currentNum += 1;

        $countNum.text($currentNum);
    })
    $removeBtn.click(function(e){
        e.preventDefault();

        if($currentNum <= 0){
            $currentNum = 0;
        }else{
            $currentNum -= 1;
        }
        $countNum.text($currentNum);
    });
*/



})//document ready jquery