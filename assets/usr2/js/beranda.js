$(document).ready(function(){
    setTimeout(function () { 
        loadContent();
        loadKategori();
        contentTerbaru();
     }, 1000);
	
     localStorage.removeItem('kjlauia3409834n5sa824jklasdjdg');
});
var bulanFormat = ['', 'Januari', 'Februari', 'Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
// content
function loadContent(){
	let contentData = "";
	let topImg = "";
	let trndBottom = "";
    let trndRight = "";
    let trndAnimated = "";
    let trnding = "";
	$.ajax({
        type: 'POST',
        url: '../beranda/content_data',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
        	topImg += ""+
        	"<img src='./../uploads/up/"+ data['top'][0]['gambar'] +"'  class='img-fluid' alt='Responsive image'>"+
            "<div class='trend-top-cap'>"+
                "<span>"+ data['top'][0]['nama_kategori'] +"</span>"+
                
                "<h2><a href='../detail/"+ data['top'][0]['uniq_berita'] +"/"+ data['top'][0]['linked'].replace(/[^a-z0-9]/gi, '-') +"'>"+ data['top'][0]['judul_berita'] +"</a></h2>"+
            "</div>";
            $('.trend-top-img').html(topImg);

            for(let no = 1; no < 4; no++){
            	trndBottom += ""+
	            "<div class='col-lg-4'>"+
		            "<div class='single-bottom mb-35'>"+
		                "<div class='trend-bottom-img mb-30'>"+
		                    "<img src='./../uploads/up/"+ data['top'][no]['gambar'] +"' alt='' class='img-thumbnail'>"+
		                "</div>"+
		                "<div class='trend-bottom-cap'>"+
		                    "<span class='color1' style='margin:0;'>"+ data['top'][no]['nama_kategori'] +"</span>"+
		                    "<span style='margin:0;'>"+ data['top'][no]['tgl'] +"<br />"+ data['top'][no]['jam'] +"</span>"+
		                    "<h6><a href='../detail/"+ data['top'][no]['uniq_berita'] +"/"+ data['top'][no]['linked'].replace(/[^a-z0-9]/gi, '-') +"'>"+ data['top'][no]['judul_berita'] +"</a></h6>"+
		                "</div>"+
		            "</div>"+
		        "</div>";
		    }
	        $('.trending-bottom .row').html(trndBottom);

            for(let no2 = 4; no2 < 8; no2++){
                trndRight += ""+
                "<div class='trand-right-single d-flex'>"+
                    "<div class='trand-right-img'>"+
                        "<img src='./../uploads/up/"+ data['top'][no2]['gambar'] +"' alt=''>"+
                    "</div>"+
                    "<div class='trand-right-cap'>"+
                        "<span class='color1' style='margin:0;'>"+ data['top'][no2]['nama_kategori'] +"</span>"+
                        "<span style='margin:0;'>"+ data['top'][no2]['tgl'] +"<br />"+ data['top'][no2]['jam'] +"</span>"+
                        "<h6 style='color:#000;'><a href='../detail/"+ data['top'][no2]['uniq_berita'] +"/"+ data['top'][no2]['linked'].replace(/[^a-z0-9]/gi, '-') +"'>"+ data['top'][no2]['judul_berita'] +"</a></h6>"+
                    "</div>"+
                "</div>";
            }
            $('.class-trending-right').html(trndRight);
            for(let no3 = 0; no3 < 5; no3++){
                trndAnimated += "<li class='news-item'>"+ data['top'][no3]['judul_berita'] +"</li>";
            }
            $('.animated-cls-view').append(trndAnimated);

            for(let no4 = 0; no4 < 4; no4++){
                $('.judul-slide-bootom-' + no4).html(data['populer'][no4]['judul_berita']);
                $('.judul-slide-bootom-' + no4).attr("href", "../detail/"+ data['top'][no4]['uniq_berita'] +"/"+ data['top'][no4]['linked'].replace(/[^a-z0-9]/gi, '-'));
                $('.tgl-class-popler-' + no4).html(data['populer'][no4]['tgl']);
                $('.kategori-slide-bootom-' + no4).html(data['populer'][no4]['nama_kategori']);
                $('.img-slide-bootom-' + no4).attr('src', './../uploads/up/'+ data['populer'][no4]['gambar']);
            }
        }
    }).done(function() {
    });
}

// click action
$(document).on('click', '.nav-link', function(){
    let katData = $(this).attr('data');
    localStorage.setItem('ktgdha325dxf44xdvv', katData);
    loadKategori();
});
function loadKategori(){
    if(localStorage.getItem('ktgdha325dxf44xdvv') != null){
        var kateg = "?kategori_id="+localStorage.getItem('ktgdha325dxf44xdvv');
    } else {
        var kateg = "";
    }
    let cardDt = "";
    $.ajax({
        type: 'POST',
        url: '../beranda/kategori_data' + kateg,
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            for(let number = 0; number < data['count']; number++){
            cardDt += ""+
            "<div class='col-lg-4 col-md-4'>"+
                "<div class='single-what-news mb-100'>"+
                    "<div class='what-img'>"+
                        "<img src='./../uploads/up/"+ data['data'][number]['gambar'] +"' alt='' style='max-height:400px;'>"+
                    "</div>"+
                    "<div class='what-cap'>"+
                        "<span class='color1' style='margin:0;'>"+ data['data'][number]['nama_fokus_berita'] +"</span>"+
                        "<span style='margin:0;'>"+ data['data'][number]['tgl'] +"</span>"+
                        "<h6><a href='../detail/"+ data['data'][number]['uniq_berita'] +"/"+ data['data'][number]['linked'].replace(/[^a-z0-9]/gi, '-')+"'>"+ data['data'][number]['title'] +"</a></h6>"+
                    "</div>"+
                "</div>"+
            "</div>";
            }
            $('.kategori-berita-class').html(cardDt);
        }
    }).done(function() {
    });
}
function contentTerbaru(){
    let cardDt2 = "";
    $.ajax({
        type: 'POST',
        url: '../beranda/content_terbaru',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
        },
        success: function(data) {
            for(let number3 = 0; number3 < data['data'].length; number3++){
                cardDt2 += ""+
                "<div class='col-lg-6 col-md-4'>"+
                    "<div class='single-what-news mb-100'>"+
                        "<div class='what-img'>"+
                            "<img src='./../uploads/up/"+ data['data'][number3]['gambar'] +"' alt='' style='max-height:400px;'>"+
                        "</div>"+
                        "<div class='what-cap'>"+
                            "<span class='color1' style='margin:0;'>"+ data['data'][number3]['nama_kategori'] +"</span>"+
                            "<span style='margin:0;'>"+ data['data'][number3]['tgl'] +"</span>"+
                            "<h6><a href='../detail/"+ data['data'][number3]['uniq_berita'] +"/"+ data['data'][number3]['linked'].replace(/[^a-z0-9]/gi, '-')+"'>"+ data['data'][number3]['judul_berita'] +"</a></h6>"+
                        "</div>"+
                    "</div>"+
                "</div>";
                }
                $('.terbaru-berita-class').html(cardDt2);
        }
    }).done(function() {
    });
}