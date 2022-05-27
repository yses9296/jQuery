$(function(){
    /* 기본 슬라이드 */
    $('.basic_slider').bxSlider();

    /* 좌우 컨트롤 슬라이드 */
    $('.control_slider').bxSlider({
        // controls: false
        pager : false,
        nextText : '<i class="fa-solid fa-chevron-right"></i>',
        prevText : '<i class="fa-solid fa-chevron-left"></i>'
    });
    $('.img_control_slider').bxSlider({
        pager : false,
        // controls: false,
        prevSelector : '.image-controls .img_controls .prev',
        nextSelector : '.image-controls .img_controls .next'
    });

    /* 멀티플 슬라이드 */

    /* 슬라이드 옵션 활용하기 */ 

    /* 자동 슬라이드 구현 */ 

    /* 멀티플 자동 슬라이드 구현 */  
    
    /* 탭 + 슬라이드 연동 */  
    
});