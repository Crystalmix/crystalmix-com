$('.dropdown-menu a').on('click', function () {
    $('.navbar-collapse').removeClass('in');
    $('.header__menu-button').addClass('collapsed');
    $('.dropdown-menu').css('display', 'none');

});

var isTouch =  !!("ontouchstart" in window) || window.navigator.msMaxTouchPoints > 0;

if (!isTouch) {
    $('.dropdown').hover(
        function() {
            $(this).find('.dropdown-menu').css('display', 'block');
            $(this).find('img').css('transform', 'rotate(180deg)');
        },
        function () {
            $(this).find('.dropdown-menu').css('display', 'none');
            $(this).find('img').css('transform', '');
        }
    );
}
$('.header__menu-button').on('click', function () {
    $(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").outerHeight() + "px" });
});


