$(document).ready(function() {
    var input_upload = $('input.upload'),
        detele_btn = $('#delete-btn'),
        attach_btn = $('#attach-btn'),
        selected_file = $('#selected-file'),
        contact_form = $('#contactForm'),
        form_part_one = $('.form-part-one'),
        form_part_two = $('.form-part-two'),
        next_btn = $('#nextButton'),
        back_btn = $('#backButton');

    detele_btn.hide();
    form_part_two.hide();

    input_upload.on('change', function () {
        file_name = input_upload.val();
        file_name = file_name.substring(file_name.lastIndexOf('\\') + 1);
        selected_file.text(file_name);
        attach_btn.hide();
        detele_btn.show();
    });


    input_upload.on('click', function (event) {
        event.stopPropagation();
    });


    detele_btn.on('click', function (event) {
        event.preventDefault();
        selected_file.text('or attach request for proposal (optional)');
        input_upload.val('');
        detele_btn.hide();
        attach_btn.show();
    });


    $('.fileUpload').on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        input_upload.click();
    });


    next_btn.on('click', function () {
        form_part_one.stop().animate({opacity: "0"}, 500, function () {
            form_part_one.hide();
            form_part_two.css('opacity', 0);
            form_part_two.show();
            form_part_two.stop().animate({opacity: "1"}, 500);
        });
    });

    back_btn.on('click', function () {
        form_part_two.stop().animate({opacity: "0"}, 500, function () {
            form_part_two.hide();
            form_part_one.css('opacity', 0);
            form_part_one.show();
            form_part_one.stop().animate({opacity: "1"}, 500);
        });
    });


    contact_form.on('submit', function(event) {
        if (form_part_one.is(':visible')) {
            next_btn.click();
            event.preventDefault();
        }
    });
});
