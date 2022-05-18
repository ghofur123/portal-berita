$(document).ready(function(){
    setTimeout(function () { 
        kategoriData();
     }, 1000);
	
     localStorage.removeItem('kjlauia3409834n5sa824jklasdjdg');
});
// ambil link
localStorage.setItem('njlgynzmccl89892jn2jbbac', window.location.href.replace('http://localhost:8080/project/portalberita/berita/', ''));
var bulanFormat = ['', 'Januari', 'Februari', 'Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
// content
function kategoriData(){
    let cardDt2 = "";
    if(localStorage.getItem('kjlauia3409834n5sa824jklasdjdg') == null){
        var limitDt = '6';
    } else {
        var limitDt = localStorage.getItem('kjlauia3409834n5sa824jklasdjdg').toString();
    }
    $.ajax({
        type: 'POST',
        url: linkpage + 'kategori/kategori_data?kategori=' + localStorage.getItem('njlgynzmccl89892jn2jbbac') + '&limit='+ limitDt,
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
        },
        success: function(data) {
            console.log(data['count']);
            localStorage.setItem('kjlauia3409834n5sa824jklasdjdg', data['count']);
            for(let number3 = 0; number3 < data['data'].length; number3++){
                cardDt2 += ""+
                "<div class='col-lg-6 col-md-4'>"+
                    "<div class='single-what-news mb-100'>"+
                        "<div class='what-img'>"+
                            "<img src='"+ linkpage + "uploads/up/"+ data['data'][number3]['gambar'] +"' alt='' style='max-height:400px;'>"+
                        "</div>"+
                        "<div class='what-cap'>"+
                            "<span class='color1' style='margin:0;'>"+ data['data'][number3]['nama_kategori'] +"</span>"+
                            "<span style='margin:0;'>"+ data['data'][number3]['tgl'] +"</span>"+
                            "<h4><a href='"+ linkpage +"detail/"+ data['data'][number3]['uniq_berita'] +"/"+ data['data'][number3]['linked'].replace(/[^a-z0-9]/gi, '-') +"'>"+ data['data'][number3]['judul_berita'] +"</a></h4>"+
                        "</div>"+
                    "</div>"+
                "</div>";
                }
                $('.terbaru-berita-class').html(cardDt2);
        }
    }).done(function() {
    });
}
$(document).on('click', '.class-muat-lebih', function(){
    var mmgg = (Number(localStorage.getItem('kjlauia3409834n5sa824jklasdjdg')) + 6);
    localStorage.setItem('kjlauia3409834n5sa824jklasdjdg', mmgg);
    kategoriData();
});
$(document).on('click', '.nav-link', function(){
    let katData = $(this).attr('data1');
    localStorage.setItem('njlgynzmccl89892jn2jbbac', katData);
    kategoriData();
});