$(document).ready(function () {
    $('.burger_menu').click(function () {
        $('.burger_menu').toggleClass('open-menu');
        $('.menu').toggleClass('open-menu');
    });
});
$(document).ready(function () {
    $('.burger_menu_close').click(function () {
        $('.burger_menu_close').toggleClass('close-menu');
        $('.menu').toggleClass('open-menu');
    });
});