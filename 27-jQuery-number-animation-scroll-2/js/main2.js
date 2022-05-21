$(function(){

    var executed = false;

    $('.section2').waypoint(
        function(){ // == if($(window).scrollTop() >= threshold){}
    
            var target = $('.animate').attr('data-rate');

            if(!executed){

                var percent_number_step = $.animateNumber.numberStepFactories.append('%');
                $('.animate').animateNumber(
                    {
                        number: target,
                        numberStep: percent_number_step
                    }, 1500);
                executed = true;

            }
        },
        {
            offset: '80%'
        }
    );


});