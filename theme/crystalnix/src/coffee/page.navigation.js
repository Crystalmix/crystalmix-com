$(document).ready(function() {

    var menu_btn_text = $('.header__menu-button__text'),
        page_name = menu_btn_text.text();

    $('.header .dropdown-menu a').on('click', function () {
        $('.dropdown.open .dropdown-toggle').click();
        $('.navbar-collapse').collapse('hide');
        $('.header__menu-button').addClass('collapsed');
        $('.dropdown-menu').removeClass('block-on-desctop').addClass('none-on-desctop');
    });

    var isTouch =  !!("ontouchstart" in window) || window.navigator.msMaxTouchPoints > 0;

    if (!isTouch) {
        $('.header .dropdown').hover(
            function() {
                $(this).find('.dropdown-menu').removeClass('none-on-desctop').addClass('block-on-desctop');
            },
            function () {
                $(this).find('.dropdown-menu').removeClass('block-on-desctop').addClass('none-on-desctop');
            }
        );
    }
    $('.header__menu-button').on('click', function () {
        $(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").outerHeight() + "px" });
    });

    $('.collapse').on('show.bs.collapse', function() {
        menu_btn_text.text('Menu');
        $('.overlay').fadeIn('fast');
    }).on('hide.bs.collapse', function() {
        menu_btn_text.text(page_name);
        $('.overlay').fadeOut('fast');
    });

    $('.dropdown-menu a').click(function () {
        var elem = $(this).attr('href');
        elem = elem.substring(elem.indexOf('#'))
        $('body').animate({ scrollTop: $(elem).offset().top - $('.navbar-header').outerHeight() }, 1500);
        return false;
    });

    $('.page-logo a, .with-value a').click(function () {
        var elem = $(this).attr('href');
        elem = elem.substring(elem.indexOf('#'))
        $('body').animate({ scrollTop: $(elem).offset().top - $('.navbar-header').outerHeight() }, 750);
        return false;
    });

});


