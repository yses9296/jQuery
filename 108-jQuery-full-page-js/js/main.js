$(function(){

    $('#fullpage').fullpage({

        anchors:['section1', 'section2', 'section3', 'section4', 'section5'],
        navigation: true,
        navigationPosition: 'right',       
        sectionsColor: ['#ccc', '#bbb', '#ddd', '#eee', '#aaa'],
        afterLoad: function(anchorLink, index){
            console.log('Current Section Number is ' + index);

        },
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
            console.log('Current Slide Number is ' + slideIndex);
        }
	});

    
})//document ready