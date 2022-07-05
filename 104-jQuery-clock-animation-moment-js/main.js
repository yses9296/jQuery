$(function(){
    var targetDate = moment('1/1/2023');
    console.log(targetDate);

    var $days = $('#days'),
        $hours = $('#hours'),
        $minutes = $('#minutes'),
        $seconds = $('#seconds');
    
    setInterval(function(){

        var now = moment();
        var timeLeft = moment.duration(targetDate.diff(now));
        console.log(timeLeft);
        updateClock(timeLeft);

    }, 1000);

    function updateClock(remainTime){
        var days = Math.floor(remainTime.asDays()),
            hrs = Math.floor(remainTime.asHours()) % 24,
            mins = Math.floor(remainTime.asMinutes()) % 60,
            secs = Math.floor(remainTime.asSeconds()) % 60;

            $days.text(filterNum(days));
            $hours.text(filterNum(hrs));
            $minutes.text(filterNum(mins));
            $seconds.text(filterNum(secs));

    }

    function filterNum(num){
        var formattedNum = num;
        if(num < 10){
            formattedNum = '0' + formattedNum;
        }
        return(formattedNum);
    }

})//document ready