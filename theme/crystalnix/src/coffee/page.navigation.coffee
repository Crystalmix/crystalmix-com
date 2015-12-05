$(document).ready () ->
    menu_btn_text = $('.header__menu-button__text')
    page_name = menu_btn_text.text()

    $('.header .dropdown-menu a').on 'click', () ->
        $('.dropdown.open .dropdown-toggle').click()
        $('.navbar-collapse').collapse('hide')
        $('.header__menu-button').addClass('collapsed')
        $('.dropdown-menu').removeClass('block-on-desctop').addClass('none-on-desctop')

    isTouch =  !!("ontouchstart" in window) or window.navigator.msMaxTouchPoints > 0

    if not isTouch
        $('.header .dropdown').hover(
            () ->
                $(@)
                    .find('.dropdown-menu')
                    .removeClass('none-on-desctop')
                    .addClass('block-on-desctop')
            () ->
                $(@)
                    .find('.dropdown-menu')
                    .removeClass('block-on-desctop')
                    .addClass('none-on-desctop')
        )

    $('.header__menu-button').on 'click', () ->
        $(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").outerHeight() + "px" })

    $('.collapse')
        .on 'show.bs.collapse', () ->
            menu_btn_text.text('Menu')
            $('.overlay').fadeIn('fast')
        .on 'hide.bs.collapse', () ->
            menu_btn_text.text(page_name)
            $('.overlay').fadeOut('fast')

    $('.dropdown-menu a').click () ->
        elem = $(@).attr('href')
        elem = elem.substring(elem.indexOf('#'))
        $('body').animate({ scrollTop: $(elem).offset().top - $('.navbar-header').outerHeight() }, 1500)
        no

    $('.page-logo a, .with-value a').click () ->
        elem = $(@).attr('href')
        elem = elem.substring(elem.indexOf('#'))
        $('body').animate({ scrollTop: $(elem).offset().top - $('.navbar-header').outerHeight() }, 750)
        no
