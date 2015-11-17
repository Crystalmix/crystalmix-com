$(document).ready(function(){
    var slider_mobile = $('.slider-mobile'),
        active_slide = $('#hybrid'),
        active_slide_name = $('.mobile__slide-name');

    active_slide.show();
    active_slide_name.text('Hybrid apps');

    slider_mobile.slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: 0,
        swipeToSlide: true,
        focusOnSelect: true
    });

    slider_mobile.on('beforeChange', function() {
        active_slide.stop().animate({opacity: "0"}, 500);
        active_slide_name.stop().animate({opacity: "0"}, 500);
    });

    slider_mobile.on('afterChange', function(event, slick, slide) {
        active_slide.hide();
        switch (slide % 5) {
            case 0:
                active_slide_name.text('Hybrid apps');
                active_slide = $('#hybrid');
                break;
            case 1:
                active_slide_name.text('Mobile websites');
                active_slide = $('#websites');
                break;
            case 2:
                active_slide_name.text('Social & marketing');
                active_slide = $('#social');
                break;
            case 3:
                active_slide_name.text('Internet of Things');
                active_slide = $('#internet');
                break;
            case 4:
                active_slide_name.text('Productivity & business');
                active_slide = $('#business');
                break;
        }
        active_slide.show();
        active_slide.css('opacity', 0)
        active_slide.stop().animate({opacity: "1"}, 500);
        active_slide_name.stop().animate({opacity: "1"}, 500);
    });

});