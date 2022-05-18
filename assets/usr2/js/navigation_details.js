$(document).ready(function(){
	loadMenu();
});
function loadMenu(){
	if(localStorage.getItem('mobile_menu') == null){
		var navigate = '#navigation';
	} else if(localStorage.getItem('mobile_menu') == 1){
		var navigate = '.slicknav_nav';
	}
	let menuAll = "";
    let kategoriPerData = "";
	let kategoriAll = "";
    let pagesBottom = "";
    $.ajax({
        type: 'POST',
        url: '../../beranda/kategori_menu',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            kategoriAll += "<li><a href='../beranda/home'>Home</a></li>";
            for(var i = 0; i < 6; i++) {
            	kategoriAll += "<li><a href='../../berita/"+ data['kategori'][i]['link'] +"'>"+ data['kategori'][i]['title'] +"</a></li>";
            }
            kategoriAll += "<li><a href='#''>Lain-lain</a>"+
                                "<ul class='submenu'>"+
                                "</ul>"+
                            "</li>";
            $(navigate).html(kategoriAll);
            // submenu
            for(var i2 = 7; i2 < data['count_kategori']; i2++) {
            	menuAll += "<li><a href='../../berita/"+ data['kategori'][i2]['link'] +"'>"+ data['kategori'][i2]['title'] +"</a></li>";
            }
            $('.submenu').html(menuAll);
            localStorage.removeItem('mobile_menu');

            for(let nmb = 0; nmb < data['count_kategori']; nmb++){
                kategoriPerData += "<a class='nav-item nav-link' data='"+ data['kategori'][nmb]['uniq_kategori'] +"' data1='"+ data['kategori'][nmb]['link'] +"' id='nav-home-tab' data-toggle='tab' href='#nav-home' role='tab' aria-controls='nav-home' aria-selected='true'>"+ data['kategori'][nmb]['title'] +"</a>";
            }
            $('.cls-nav-item-data').html(kategoriPerData);
            for(var i3 = 0; i3 < data['count_pages']; i3++) {
            	pagesBottom += "<li><a href='#'>"+ data['pages'][i3]['judul'] +"</a></li>";
            }
            $('.single-footer-caption .pages-footer').html(pagesBottom);
        }
    }).done(function() {
    });
}
$(document).on('click', '.mobile_menu', function(){
	localStorage.setItem('mobile_menu', 1);
	loadMenu();
});