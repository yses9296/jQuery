$(function(){

    var chart = $('.chart');
    var chartOffset = $('.charts').offset().top - 600;
    var executed = false;
    
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();

        if( scrollTop >= chartOffset){

            if(!executed){
                chart.each(function(){
                    var item = $(this);
                    var title = item.find('h2');
                    var targetNun = title.attr('data-num');
                    var circcle = item.find('circle');
            
                    $({rate:0}).animate({rate: targetNun},
                        {
                            duration: 1500,
                            progress: function(){
                                var current = this.rate;
                                var amount = 630 - (630*current/100);
               
                                title.text(Math.floor(current));
                                circcle.css({strokeDashoffset: amount})
                            }
                        }
                    );
            
                })//chart each

                executed = true

            }//executed if

        }//scrollTop if

    });//window scroll





})//document ready