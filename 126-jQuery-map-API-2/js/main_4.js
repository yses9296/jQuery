$( function() {

//CASE 1-1: Tab Menu
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
    });//tabs

//CASE 1-2: MAP API - TAB
    function seoulMap(lat, lng, field){
        var mapContainer = document.getElementById(field),
        mapOption = { 
            // center: new kakao.maps.LatLng(location), 
            center: new kakao.maps.LatLng(lat, lng), 
            level: 3 
        };
    
        var map = new kakao.maps.Map(mapContainer, mapOption); 
        
    }//seoulMap
    


//CASE 2-1: ACCORDION
    $( "#accordion" ).accordion({
        create: function( event, ui ) {
            var targetLat = ui.panel.attr('data-lat');
            var targetLng = ui.panel.attr('data-lng');
            var targetDiv = ui.panel.attr('id');
            accordionMap(targetLat, targetLng, targetDiv);
        },
        activate: function( event, ui ) {
            var targetLat = ui.newPanel.attr('data-lat');
            var targetLng = ui.newPanel.attr('data-lng');
            var targetDiv = ui.newPanel.attr('id');
            accordionMap(targetLat, targetLng, targetDiv);
        }
    });//accordion



//CASE 2-2:  MAP API - ACCORDION
    function accordionMap(lat, lng, field){
        var mapContainer = document.getElementById(field),
        mapOption = { 
            // center: new kakao.maps.LatLng(location), 
            center: new kakao.maps.LatLng(lat, lng), 
            level: 3 
        };
    
        var map = new kakao.maps.Map(mapContainer, mapOption); 
        
    }//accordionMap



//CASE 3-1: MAP LINK
    function myMap(lat, lng){
        var mapContainer = document.getElementById('map'),
        mapOption = { 
            // center: new kakao.maps.LatLng(location), 
            center: new kakao.maps.LatLng(lat, lng), 
            level: 3 
        };
    
    var map = new kakao.maps.Map(mapContainer, mapOption); 
        
    }//myMap

//CASE 3-2: MENU CLICK
    $('.maplink li a').click(function(e){
        e.preventDefault();
        var targetLat = $(this).attr('data-lat');
        var targetLng = $(this).attr('data-lng');
        myMap(targetLat,targetLng);
    })//maplink click

    //initial location
    // myMap(37.5727906,126.9769891);
    $('.maplink li a').eq(0).trigger('click');



//CASE 4-1: MYTAB
    $('.mytab ul li a').click(function(e){
        e.preventDefault();
        var targetEl = $(this).attr('href');

        // $('.mytab > div').hide();
        $(targetEl).show();

        var lat = $(targetEl).attr('data-lat');
        var lng = $(targetEl).attr('data-lng');
        var targetDiv = $(targetEl).find('div').attr('id');
        myTapMap(lat, lng, targetDiv);

    })// .mytab ul li a click()
    //initial location
    $('.mytab ul li a').eq(0).trigger('click');


//CASE 4-2: TAB MENU CLICK
    function myTapMap(lat, lng, field){
        var mapContainer = document.getElementById(field),
        mapOption = { 
            // center: new kakao.maps.LatLng(location), 
            center: new kakao.maps.LatLng(lat, lng), 
            level: 3 
        };
    
    var map = new kakao.maps.Map(mapContainer, mapOption); 
        
    }//myMap

});