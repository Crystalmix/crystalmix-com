$(document).ready(function(){
    var slider_mobile = $('.slider-mobile');

    var active_slide = $('#hybrid');

    slider_mobile.slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: 0,
        focusOnSelect: true
    });
/*
    slider_mobile.on('beforeChange', function() {
        active_slide.stop().animate({opacity: "0"}, 500);
    });

    slider_mobile.on('afterChange', function(event, slick, slide) {
        $('.bespoke__mobile__content__text').stop().animate({opacity: "1"}, 500);
        $('.bespoke__mobile__content__text').text(slide);
    });
*/
});