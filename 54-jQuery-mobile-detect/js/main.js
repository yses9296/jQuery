$(function(){
    /*
    if(jQuery.browser.mobile == true){
        $('.pc').hide();
    }   
    else {
        $('.mobile').hide();
    }
    */

    console.log(location.href);

    var pc = location.href;

    // if(jQuery.browser.mobile == true){
    //     location.href = "./mobile/";
    // }   
    if(window.devicePixelRatio > 1){
        location.href = "./mobile/index.html";
    }   


})//document ready