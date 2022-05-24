$( function() {
    $( "#accordion" ).accordion();
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