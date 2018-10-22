$(document).ready(function () {
    $('#creat_item_state').bind('click', function () {
        $('#card_page_active').addClass('move-in');
        $('#card_page_active').addClass('active');

    });
    $('#del_item_state').bind('click', function () {
        $('#card_page_active').removeClass('active');
    });
    $('#creat_body_content').bind('click', function () {
        $('#open_close').addClass('open');


    });
    $('#del_body_content').bind('click', function () {
        $('#open_close').removeClass('open');

    });
    $('#creat_foot_active').bind('click', function () {
        $('#active_modular').addClass('active');


    });
    $('#del_foot_active').bind('click', function () {
        $('#active_modular').removeClass('active');

    });
})
