$(document).ready () ->
    dropdown = $('.works-filter .dropdown')
    dropdown_menu = $('.works-filter .dropdown-menu')
    work_slider = $('.work-slider')

    dropdown.on 'shown.bs.dropdown', () ->
        work_slider.slick
            slidesToShow: 5
            slidesToScroll: 1
            swipeToSlide: false
            focusOnSelect: false
            infinite: false
            responsive: [
                {
                    breakpoint: 1200
                    settings:
                        slidesToShow: 4
                }
                {
                    breakpoint: 1024
                    settings:
                        slidesToShow: 3
                }
                {
                    breakpoint: 768
                    settings:
                        slidesToShow: 1
                }
            ]


    dropdown.on 'hide.bs.dropdown', () ->
        work_slider.slick 'unslick'


    dropdown_menu.on 'click', (event) ->
        event.preventDefault()
        event.stopPropagation()
