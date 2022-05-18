$(document).ready(function () {
    loadContent();
    loadKategori();
    
});
function loadKategori(){
    let dataViewAll = "";
    $.ajax({
        type: 'POST',
        url: 'home/menu_nav',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            dataViewAll += "<li>"+
                "<button class='navbar-close'>"+
                    "<i class='mdi mdi-close'></i>"+
                "</button>"+
            "</li>"+
            "<li class='nav-item active'>"+
                "<a class='nav-link active' href='home'>Home</a>"+
            "</li>";
            for(var i = 0; i < 7; i++) {
                dataViewAll += "<li class='nav-item'>"+
                    "<a class='nav-link' href='kategori/"+ data['kategori'][i]['title'] +"'>"+ data['kategori'][i]['title'] +"</a>"+
                "</li>";
            }
            // dataViewAll += "<li class='nav-item nav-item-lain'>"+
            //         "<a class='nav-link' href='#'>Lain-lain</a>"+
            //         "<ul class='dropdown-menu-lain'>";
            //         for(let ii = 7; ii < data['kategori'].length; ii++){
            //         dataViewAll += "<li class='nav-item'>"+ data['kategori'][ii]['title'] +"</li>";
            //         }
            //         dataViewAll += "</ul>"+
            //     "</li>";
            $('.menu-nav-view').html(dataViewAll);
        }
    }).done(function() {
        $('.progress').hide();
    });
}
function loadContent(){
    let dataViewTop = "";
    let dataViewSlide = "";
    $.ajax({
        type: 'POST',
        url: 'home/content',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
        },
        success: function(data) {
            // top
            for(let no = 0; no < 4; no++){
                dataViewTop += "<div class='d-flex justify-content-between  mb-3 mb-lg-0'>"+
                    "<div>"+
                        "<img src='./uploads/up/"+ data['top'][no]['gambar'] +"' alt='thumb' class='banner-top-thumb' />"+
                    "</div>"+
                    "<h5 class='m-0 font-weight-bold'> "+ data['top'][no]['judul_berita'] +"</h5>"+
                "</div>";
                $('.content-value-cls').html(dataViewTop);
            }

            // slide
            for(let no2 = 0; no2 < 5; no2++){
                console.log(data['top']);
                $('.judul-' + no2).html(data['top'][no2]['judul_berita']);
                $('.fokus-brt-' + no2).html(data['top'][no2]['nama_fokus_berita']);
                $('.carousel-image-'+ no2 +' img').attr('src', './uploads/up/' + data['top'][no2]['gambar']);
                // dataViewSlide += ""+
                // "<div class='item'>"+
                //     "<div class='carousel-content-wrapper mb-2'>"+
                //         "<div class='carousel-content'>"+
                //             "<h1 class='font-weight-bold'> "+ data['top'][no2]['judul_berita'] +"</h1>"+
                //             "<h5 class='font-weight-normal  m-0'>"+
                //             "Lorem Ipsum has been the industry's standard"+
                //             "</h5>"+
                //             "<p class='text-color m-0 pt-2 d-flex align-items-center'>"+
                //             "<span class='fs-10 mr-1'>2 hours ago</span>"+
                //             "<i class='mdi mdi-bookmark-outline mr-3'></i>"+
                //             "<span class='fs-10 mr-1'>126</span>"+
                //             "<i class='mdi mdi-comment-outline'></i>"+
                //             "</p>"+
                //         "</div>"+
                //         "<div class='carousel-image'>"+
                //             "<img src='./uploads/up/"+ data['top'][no2]['gambar'] +"' alt='' />"+
                //         "</div>"+
                //     "</div>"+
                // "</div>";
                // $('.content-val-slide').html(dataViewSlide);


            }
        }
    }).done(function() {
    });
}