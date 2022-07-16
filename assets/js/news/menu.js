$(document).ready(function(){
    loadMenuAll();
    $('.class-view-content-all').load('dashboard/dashboard_api');
});
$(document).on('click','.menu-load-nav-side', function(){
    let linkData = $(this).attr('data');
    let createStatus = $(this).attr('data1');
    let readStatus = $(this).attr('data2');
    let updateStatus = $(this).attr('data3');
    let deleteStatus = $(this).attr('data4');

    localStorage.setItem('9b7c68a918b17eb053809b198d7c9abfc142f30a', createStatus);
    localStorage.setItem('a7afddb68260a60f86c02a021efba7f216c2e7cf', readStatus);
    localStorage.setItem('0a25ba5991316bdda4a9b3abcee2106016df28a0', updateStatus);
    localStorage.setItem('9485989ff514b5106b7738850fd73c23e8c1e3f7', deleteStatus);
    $('.class-view-content-all').load(linkData);
});
function btnact(){
    if(localStorage.getItem('9b7c68a918b17eb053809b198d7c9abfc142f30a') == 'y'){$('.btn-new-data').show();} else {$('.btn-new-data').hide();}
    $(document).on('click', '.btn-edit-global', function(){$('.btn-new-data').hide();});
    if(localStorage.getItem('0a25ba5991316bdda4a9b3abcee2106016df28a0') == 'y'){$('.btn-edit-global').show();} else {$('.btn-edit-global').hide();}
    if(localStorage.getItem('9485989ff514b5106b7738850fd73c23e8c1e3f7') == 'y'){$('.btn-delete-global').show();} else {$('.btn-delete-global').hide();}
}
function loadMenuAll(){
    let dataViewAll = "";
    $.ajax({
        type: 'POST',
        url: 'menu_api/load?act=load_menu_nav',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        data: '',
        beforeSend: function() {
            $('.progress').show();
        },
        success: function(data) {
            for(let i = 0; i < data['menu_utama'].length; i++){
            dataViewAll += "<li>"+
                "<a  href='#' data='"+ i +"' class='menu-button-cls'><i class='fa fa-flash '></i>"+ data['menu_utama'][i]['nama_menu'] +"<span class='fa arrow'></span></a>"+
                "<ul class='nav nav-second-level clpse-class-"+ i +"' >";
                for(let ii = 0; ii < data['menu_sub'].length; ii++){
                    if(data['menu_utama'][i]['uniq_menu'] == data['menu_sub'][ii]['menu_utama_id']){
                        dataViewAll += "<li class='cllps-li-"+ i +"'>"+
                        "<a href='#' class='menu-load-nav-side' data='"+ data['menu_sub'][ii]['link'] +"' data1='"+ data['menu_sub'][ii]['create'] +"' data2='"+ data['menu_sub'][ii]['read'] +"' data3='"+ data['menu_sub'][ii]['update'] +"' data4='"+ data['menu_sub'][ii]['delete'] +"'><i class='fa fa-desktop '></i>"+ data['menu_sub'][ii]['nama_menu'] +"</a>"+
                    "</li>";
                    }
                }
                dataViewAll += "</ul>"+
            "</li>";
            }
            $('.menu-load-db').html(dataViewAll);
        }
    }).done(function() {
        $('.progress').hide();
    });
}
function pushStateMenu(newMenu){
    return window.history.pushState('NewPage', 'Title', newMenu);
}
$(document).on('click', '.menu-button-cls', function(){
    let dataVt = $(this).attr('data');
    $('.nav-second-level').hide();
    setTimeout(function(){
        $('.clpse-class-'+ dataVt).show();
        $('.clpse-class-'+ dataVt).addClass('.transtition-show-click');
    });    
});
$(document).on('click', '.class-logout-menu', function(){
    localStorage.clear();
    window.location.href = 'login/logout';
});
