let unqdtaww = window.location.href.split('/');
$(document).ready(function () {
    loadDataDetail();
});
function loadDataDetail(){
    let terkaitData = "";
    let trndRight = "";
    $.ajax({
        type: 'POST',
        url: linkpage +'details/content_data?uniq_berita=' + unqdtaww[6],
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            $('.img-detail-class').attr('src', linkpage + 'uploads/up/' + data['data'][0]['gambar']);
            $('.title-detail-class').html(data['data'][0]['judul_berita']);
            $('.tgl-detail-class').html(data['data'][0]['tgl'] + ' - ' + data['data'][0]['jam']);
            $('.deskription-class').html(data['data'][0]['deskripsi']);
            terkaitData += "<h6>Berita Terkait</h6>";
            for(let im = 0; im < data['terkait'].length; im++){
                
                terkaitData += "<a href='"+ linkpage + "detail/"+ data['terkait'][im]['uniq_berita'] +"/"+ data['terkait'][im]['linked'].replace(/[^a-z0-9]/gi, '-') +"'>"+ data['terkait'][im]['title'] +"</a> <br />";
            }
            $('.link-terkait-class').html(terkaitData);
            trndRight += "<h3 class='widget_title'>Terbaru</h3>";
            for(let no2 = 0; no2 < data['berita_terbaru'].length; no2++){
                trndRight += ""+
                "<div class='media post_item'>"+
                    "<img style='width:100px;' src='"+ linkpage + "uploads/up/"+ data['berita_terbaru'][no2]['gambar'] +"' alt='post'>"+
                    "<div class='media-body'>"+
                        "<a href='detail/"+ data['berita_terbaru'][no2]['uniq_berita'] +"/"+ data['berita_terbaru'][no2]['linked'].replace(/[^a-z0-9]/gi, '-')+"'"+
                            "<p style='color:#000;'>"+ data['berita_terbaru'][no2]['judul_berita'] +"</p>"+
                        "</a>"+
                        "<p>"+ data['berita_terbaru'][no2]['tgl'] +" - "+ data['berita_terbaru'][no2]['jam'] +"</p>"+
                    "</div>"+
                "</div>";
            }
            $('.right-content-singgle').html(trndRight);
        }
    }).done(function() {
    });
}