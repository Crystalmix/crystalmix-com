$(document).ready () ->
    slider_mobile = $('.slider-mobile')
    slider_cloud = $('.slider-cloud')
    active_mobile_slide = $('#hybrid')
    active_cloud_slide = $('#solutions')
    active_mobile_slide_name = $('.bespoke__slider__container.mobile_mode .slide-name')
    active_cloud_slide_name = $('.bespoke__slider__container.cloud_mode .slide-name')

    slider_mobile.slick(
        slidesToShow: 5
        slidesToScroll: 1
        arrows: false
        centerMode: true
        centerPadding: 0
        swipeToSlide: true
        focusOnSelect: true
    )

    slider_cloud.slick(
        slidesToShow: 3
        slidesToScroll: 1
        arrows: false
        centerMode: true
        centerPadding: 0
        swipeToSlide: true
        focusOnSelect: true
    )

    active_mobile_slide.show()
    active_mobile_slide_name.text('Hybrid apps')

    active_cloud_slide.show()
    active_cloud_slide_name.text('AWS based solutions')

    slider_mobile.on 'beforeChange', () ->
        active_mobile_slide.stop().animate({opacity: "0"}, 500)
        active_mobile_slide_name.stop().animate({opacity: "0"}, 500)

    slider_mobile.on 'afterChange', (event, slick, slide) ->
        active_mobile_slide.hide()
        switch slide % 5
            when 0
                active_mobile_slide_name.text('Hybrid apps')
                active_mobile_slide = $('#hybrid')
            when 1
                active_mobile_slide_name.text('Mobile websites')
                active_mobile_slide = $('#websites')
            when 2
                active_mobile_slide_name.text('Social & marketing')
                active_mobile_slide = $('#social')
            when 3
                active_mobile_slide_name.text('Internet of Things')
                active_mobile_slide = $('#internet')
            when 4
                active_mobile_slide_name.text('Productivity & business')
                active_mobile_slide = $('#business')

        active_mobile_slide.css('opacity', 0)
        active_mobile_slide.show()
        active_mobile_slide.stop().animate({opacity: "1"}, 500)
        active_mobile_slide_name.stop().animate({opacity: "1"}, 500)

    slider_cloud.on 'beforeChange', () ->
        active_cloud_slide.stop().animate({opacity: "0"}, 500)
        active_cloud_slide_name.stop().animate({opacity: "0"}, 500)

    slider_cloud.on 'afterChange', (event, slick, slide) ->
        active_cloud_slide.hide()
        switch slide % 3
            when 0
                active_cloud_slide_name.text('AWS based solutions')
                active_cloud_slide = $('#solutions')
            when 1
                active_cloud_slide_name.text('DevOps & Continuous Operations')
                active_cloud_slide = $('#continuous')
            when 2
                active_cloud_slide_name.text('Application Migration')
                active_cloud_slide = $('#migration')

        active_cloud_slide.css('opacity', 0)
        active_cloud_slide.show()
        active_cloud_slide.stop().animate({opacity: "1"}, 500)
        active_cloud_slide_name.stop().animate({opacity: "1"}, 500)
