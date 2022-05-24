$( function() {
    $( "#tabs" ).tabs();

    //종로 구청 Map API
    var mapContainer1 = document.getElementById('map1'), // 지도를 표시할 div 
        mapOption1 = { 
            center: new kakao.maps.LatLng(37.5727906, 126.9769891), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    var map1 = new kakao.maps.Map(mapContainer1, mapOption1); 

    //서울 시청 Map API
    var mapContainer2 = document.getElementById('map2'), // 지도를 표시할 div 
        mapOption2 = { 
            center: new kakao.maps.LatLng(37.5662994, 126.9757564), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    var map2 = new kakao.maps.Map(mapContainer2, mapOption2); 

    //강서 구청 Map API
    var mapContainer3 = document.getElementById('map3'), // 지도를 표시할 div 
        mapOption3 = { 
            center: new kakao.maps.LatLng(37.566419, 126.9079054), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    var map3 = new kakao.maps.Map(mapContainer3, mapOption3); 

} );