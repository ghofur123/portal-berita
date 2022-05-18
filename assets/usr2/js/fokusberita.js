$(document).ready(function(){
    setTimeout(function () { 
        fokusBerita();
     }, 1000);
});
function fokusBerita(){
    let fokusDt = "";
    $.ajax({
        type: 'POST',
        url: linkpage + 'beranda/fokus_berita',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            for(let number2 = 0; number2 < data['count']; number2++){
                fokusDt += "<a href='"+ linkpage +"fokus/"+ data['data'][number2]['link'] +"' data='"+ data['data'][number2]['nama_fokus_berita'] +"' class='list-group-item list-group-item-action fokus-berita-button'>"+ data['data'][number2]['nama_fokus_berita'] +"</div>";

            }
            $('.col-lg-4 .single-follow .list-group').html(fokusDt);
        }
    }).done(function() {
    });
}