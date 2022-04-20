$(document).ready(function () {
    console.log('ok');
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