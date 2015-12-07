$(document).ready () ->
    industry = $('.blogs-filter .dropdown')
    year = $('#year')

    industry.on 'shown.bs.dropdown', () ->
        $('.blog-slider').slick
            slidesToShow: 5
            slidesToScroll: 1
            swipeToSlide: false
            focusOnSelect: false
            infinite: false
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                }
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        $('.slick-arrow').on 'click', (event) ->
            event.preventDefault()
            event.stopPropagation()


    industry.on 'hide.bs.dropdown', () ->
        $('.blog-slider').slick 'unslick'


    $('.blogs-filter .dropdown-menu').on 'click', (event) ->
        event.preventDefault()
        event.stopPropagation()
