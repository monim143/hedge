/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // code should be execute here

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {

    // bootstrap
    // multiple carousel sync
    $(function () {
        if ($('.carousel-sync').length) {
            let screen = $('#carousel-screen').carousel();
            let content = $('#carousel-content').carousel();
            screen.on('slide.bs.carousel', function (event) {
                let to = $(event.relatedTarget).index();
                content.carousel(to);
            });
        }
    });

    
    $(function () {
        let form = $('#form'),
            form_data;

        // Success function
        function done_func(response) {
            // message.fadeIn().find('.alert').removeClass('alert-danger').addClass('alert-success');
            // message.find('.alert').text(response);
            // msgSuccess.addClass('show').fadeIn();
            $('#modal-success').modal('show');
            form.find('input:not([type="submit"]), textarea').val('');
        }

        // fail function
        function fail_func(data) {
            // message.fadeIn().find('.alert').removeClass('alert-success').addClass('alert-danger');
            // message.find('.alert').text(response);
            // msgDanger.addClass('show').fadeIn();
            $('#modal-danger').modal('show');
        }

        form.submit(function (e) {
            e.preventDefault();
            form_data = $(this).serialize();
            $.ajax({
                type: 'POST',
                url: form.attr('action'),
                data: form_data
            })
                .done(done_func)
                .fail(fail_func);
        });
    });


});
