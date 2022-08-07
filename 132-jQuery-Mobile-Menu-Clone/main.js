$(function(){

    let mobileMenuNav = $('.mobile');
    let mobileMenuContents = $('.pc').contents().clone();

    mobileMenuNav.append(mobileMenuContents);

    mobileMenuNav.find('li').click(function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    })

})//document ready