$(function(){

    var rating = $('.review .rating');

    rating.each(function(){
        var targetScore = $(this).attr('data-rate');
        $(this).find('svg:nth-child(-n+'+ targetScore+')').css({color: '#F05522 '});
    });//rating each


    var userScore = $('#makeStar');
    var target = $('.make_star .rating');

    userScore.change(function(){
        var userScoreNum = $(this).val();
        target.find('svg').css({color: '#000'});
        target.find('svg:nth-child(-n+'+ userScoreNum+')').css({color: '#F05522'});
    })//userScroe change

    target.find('svg').click(function(){
        var targetNum = $(this).index() + 1;
        target.find('svg').css({color: '#000'});
        target.find('svg:nth-child(-n+'+ targetNum+')').css({color: '#F05522'});
        userScore.val(targetNum);
    })//target svg click

})