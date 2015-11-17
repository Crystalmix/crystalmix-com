$(document).ready(function(){
    var slider_mobile = $('.slider-mobile'),
        slider_mobile_content = $('.bespoke__mobile__content'),
        slide_name = $('.mobile__slide-name');

    var content_html = $.get('ajax/services/hybrid.html', function());

    slide_name.text('Hybrid apps');
    slider_mobile_content.html(content_html);

    slider_mobile.slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: 0,
        focusOnSelect: true
    });

   /* slider_mobile.on('beforeChange', function() {
        $('.bespoke__mobile__content__text').stop().animate({opacity: "0"}, 500);
    });

    slider_mobile.on('afterChange', function(event, slick, slide) {
        $('.bespoke__mobile__content__text').stop().animate({opacity: "1"}, 500);
        $('.bespoke__mobile__content__text').text(slide);
    });*/

});