$(function(){

    //mixitup plugin
    var mixer = mixitup('.mix-wrapper',{
        
        "animation": {
            "duration": 250,
            "nudge": true,
            "reverseOut": false,
            "effects": "fade scale(0.57) translateX(20%) translateZ(-100px) rotateX(56deg)"
        }

    });

    //select tag
    var $filter = $('#filter-select'),
        $sort = $('#sort-select');

    $filter.change(function(){
        var $filter_value = $(this).val();
        mixer.filter($filter_value);
    })
    $sort.change(function(){
        var $sort_value = $(this).val();
        mixer.sort($sort_value);
    })

});