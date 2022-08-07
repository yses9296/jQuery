$(function(){

    let mobileMenuNav = $('.mobile');
    let mobileMenuContents = $('.pc').contents().clone();

    mobileMenuNav.append(mobileMenuContents);

})//document ready