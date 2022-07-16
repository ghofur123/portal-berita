$(document).ready(function(){

    pagesData();

});

let assnnmaepg = window.location.href.split('/');

function pagesData(){

    let cardDt2 = "";

    $.ajax({

        type: 'POST',

        url: linkpage +'pages/pages_data?link=' + assnnmaepg[4],

        contentType: 'application/x-www-form-urlencoded; charset=utf-8',

        dataType: 'json',

        data: '',

        beforeSend: function() {

        },

        success: function(data) {

            $('.title-pages-class').html(data['data'][0]['judul']);

            $('.deskription-class-pages').html(data['data'][0]['deskripsi']);

        }

    }).done(function() {

    });

}