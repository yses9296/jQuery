$( function() {

//Tab Menu
    $( "#tabs" ).tabs({
        // case 2: jqueryui API
        create: function( event, ui ) {
            //ui.panel == $(this)
            var targetLat = ui.panel.attr('data-lat');
            var targetLng = ui.panel.attr('data-lng');
            var targetDiv = ui.panel.find('div').attr('id');

            seoulMap(targetLat, targetLng, targetDiv);
        },
        activate: function( event, ui ) {
            
            var targetLat = ui.newPanel.attr('data-lat');
            var targetLng = ui.newPanel.attr('data-lng');
            var targetDiv = ui.newPanel.find('div').attr('id');

            seoulMap(targetLat, targetLng, targetDiv);
        }
    });

    /*
        case 1: 
        var tabLink = $('#tabs ul li a');

        tabLink.click(function(e){
            e.preventDefault();
            var targetLat = $(this).attr('data-lat');
            var targetLng = $(this).attr('data-lng');
            seoulMap(targetLat, targetLng);
        })//tabLink.click
    */



//MAP API
    /*
        //초기값 설정
        var initLat = 37.5727906,
            initLng = 126.9769891;
        seoulMap(initLat, initLng);
    */

    //위도 경도 장소 찾기
    function seoulMap(lat, lng, field){
        var mapContainer = document.getElementById(field),
        mapOption = { 
            // center: new kakao.maps.LatLng(location), 
            center: new kakao.maps.LatLng(lat, lng), 
            level: 3 
        };
    
        var map = new kakao.maps.Map(mapContainer, mapOption); 
        
    }//seoulMap



});