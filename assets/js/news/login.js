$(document).on('submit', '#form-login-pages', function() {
    $('.alert-information').show();
    $.ajax({
        type: 'POST',
        url: 'login/validation',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: $(this).serialize(),
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            console.log(data);
            $('.message-login').html(data[0]['message']);
            setTimeout(function(){
                $('.alert-information').hide();
            }, 2000);
            if(data[0]['status'] == 1){
                window.location = 'dashboard';
            }
        }
    }).done(function() {
        $('.progress').hide();
    });
    return false;
});