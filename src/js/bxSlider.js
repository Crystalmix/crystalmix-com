var getSlideMobileWidth = function() {
    var wrapperWidth = $('.bespoke__mobile').width();
    return wrapperWidth / 5;
}

$(document).ready(function(){
    var slider_mobile = $('.slider-mobile');
    slider_mobile.bxSlider({
        touchEnabled: false,
        minSlides: 1,
        maxSlides: 5,
        slideWidth: getSlideMobileWidth(),
        moveSlides: 1
    });
    $(window).on('resize', function() {
        slider_mobile.reloadSlider({
        touchEnabled: false,
        minSlides: 1,
        maxSlides: 5,
        slideWidth: getSlideMobileWidth(),
        moveSlides: 1
    })
    });
    $('.bespoke__mobile').on('click', function(event) {
        switch (event.target.id) {
            case 'slide-0':
                slider_mobile.goToSlide(0);
                break;
            case 'slide-1':
                slider_mobile.goToSlide(1);
                break;
            case 'slide-2':
                slider_mobile.goToSlide(2);
                break;
            case 'slide-3':
                slider_mobile.goToSlide(3);
                break;
            case 'slide-4':
                slider_mobile.goToSlide(4);
                break;
        }
        var current_slide = slider_mobile.getCurrentSlide();
        var current_img = $('#slide-' + current_slide);
        current_img.addClass('slide-active');
    });
});