$(function(){
    $('.category_list').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
      });

    let categoryList = $('.category_list li');

    $('.category_list').on('afterChange', function(event, slick, currentSlide, nextSlide){
      let targetURL = categoryList.eq(currentSlide).find('a').attr('href');
      location.href = targetURL;
    });
             
})