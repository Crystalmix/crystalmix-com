$(document).ready(function() {

    $('.header .dropdown-menu a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
        $('.header__menu-button').addClass('collapsed');
        $('.dropdown.open .dropdown-toggle').click();
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
        $('.overlay').fadeIn('fast');
    }).on('hide.bs.collapse', function() {
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


