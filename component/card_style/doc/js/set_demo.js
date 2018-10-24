$(document).ready(function () {
    $('#creat_item_state').bind('click', function () {
        $('#card_page_active').addClass('move-in');
        $('#card_page_active').addClass('active');
        $('#card_page').removeClass('active');
    });
    $('#del_item_state').bind('click', function () {
        $('#card_page_active').removeClass('move-in');
        $('#card_page').removeClass('move-out');
    });

    $('#del_item_reset').bind('click', function () {
        $('#card_page').addClass('active');
        $('#card_page_active').removeClass('active');
        $('#card_page_active').removeClass('move-out');
    });
    $('#creat_body_content').bind('click', function () {

        $('#open_close').addClass('move-out');
        $('#open_close').addClass('open');

    });
    $('#del_body_content').bind('click', function () {
        $('#open_close').removeClass('move-out');
    });
    $('#del_body_reset').bind('click', function () {
        $('#open_close').removeClass('open');
    });

    $('#creat_foot_active').bind('click', function () {
        $('#active_modular').addClass('active');

    });
    $('#del_foot_active').bind('click', function () {
        $('#active_modular').removeClass('active');
    });
})
