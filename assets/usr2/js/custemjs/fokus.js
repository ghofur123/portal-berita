$(document).ready(function () {
    
    fokusItem();
    setTimeout(function(){
        loadFokusPg();
    },1000);
    localStorage.removeItem('kjlauia3409834n5sa824jklasdjdgghfg6dfgd');
    
});
let assnnmae = window.location.href.split('/');
console.log(assnnmae[5]);
function loadFokusPg(){
    if(localStorage.getItem('ktgdha325dxf44xdvvmdgseeffff') != null){
        var kateg = "?fokus_link="+localStorage.getItem('ktgdha325dxf44xdvvmdgseeffff');
    } else {
        var kateg =  "?fokus_link=" + assnnmae[6];
    }
    if(localStorage.getItem('kjlauia3409834n5sa824jklasdjdgghfg6dfgd') == null){
        var limitDt = '6';
    } else {
        var limitDt = localStorage.getItem('kjlauia3409834n5sa824jklasdjdgghfg6dfgd').toString();
    }
    let cardDt = "";
    $.ajax({
        type: 'POST',
        url: linkpage + 'fokus_berita/fokus_data' + kateg + '&limit='+ limitDt,
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
                        "<img src='"+ linkpage + "uploads/up/"+ data['data'][number]['gambar'] +"' alt='' style='max-height:400px;'>"+
                    "</div>"+
                    "<div class='what-cap'>"+
                        "<span class='color1' style='margin:0;'>"+ data['data'][number]['nama_fokus_berita'] +"</span>"+
                        "<span style='margin:0;'>"+ data['data'][number]['tgl'] +"</span>"+
                        "<h6><a href='"+ linkpage + "detail/"+ data['data'][number]['uniq_berita'] +"/"+ data['data'][number]['linked'].replace(/[^a-z0-9]/gi, '-')+"'>"+ data['data'][number]['judul_berita'] +"</a></h6>"+
                    "</div>"+
                "</div>"+
            "</div>";
            }
            $('.fokus-berita-class-1').html(cardDt);
        }
    }).done(function() {
    });
}
function fokusItem(){
    let dataPerData = "";
    $.ajax({
        type: 'POST',
        url: linkpage + 'fokus_berita/fokus_item',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {

        },
        success: function(data) {
            for(let nmb = 0; nmb < data['data'].length; nmb++){
                dataPerData += "<a class='nav-item nav-link fks-itm-lk' data='"+ data['data'][nmb]['uniq_fokus_berita'] +"' data1='"+ data['data'][nmb]['link'] +"' id='nav-home-tab' data-toggle='tab' href='#nav-home' role='tab' aria-controls='nav-home' aria-selected='true'>"+ data['data'][nmb]['nama_fokus_berita'] +"</a>";
            }
            $('.cls-fokus-nav-item-data').html(dataPerData);
        }
    }).done(function() {
    });
}
$(document).on('click', '.fks-itm-lk', function () {
    let linkFokus = $(this).attr('data1');
    localStorage.setItem('ktgdha325dxf44xdvvmdgseeffff', linkFokus);
    loadFokusPg();
});
$(document).on('click', '.class-muat-lebih-fokus', function(){
    var mmgg = (Number(localStorage.getItem('kjlauia3409834n5sa824jklasdjdgghfg6dfgd')) + 6);
    localStorage.setItem('kjlauia3409834n5sa824jklasdjdgghfg6dfgd', mmgg);
    loadFokusPg();
});